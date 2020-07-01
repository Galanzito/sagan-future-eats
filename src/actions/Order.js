import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../containers/Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

//*****ASSÍNCRONAS*****//
export const getOrder = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseURL}/active-order`, {
      //todo: headers:{auth:tokenTest} ADICIONAR AUTH CERTO AQUI
    });
    // dispatch(setOrders(response.data))
  } catch (error) {
    console.error(error)
    alert('Erro ao tentar adquirir lista de pedidos')
  }
}

export const placeOrder = (paymentMethod, orders) => async (dispatch) => {
  let restaurantId = orders[0].restaurantId
  let formatedOrder = []
  formatedOrder = orders.map(order => {
    delete order.restaurantId
    return order
  })

  try {
    await axios.post(`${baseURL}/restaurants/${restaurantId}/order`,
      {
        products: formatedOrder,
        paymentMethod: paymentMethod
      },
      { headers: { auth: localStorage.getItem("token") } }
    )
  } catch (error) {
    console.error(error)
    alert('Erro ao tentar mandar a order')
  }
}

//*****SÍNCRONAS*****//
export const setOrder = (order) => ({
  type: 'SET_RESTAURANT_ORDER',
  payload: { order }
})

export const updateOrder = (product) => ({
  type: 'UPDATE_RESTAURANT_ORDER',
  payload: { product }
})

export const delOrder = (productId) => ({
  type: 'DEL_RESTAURANT_ORDER',
  payload: { productId }
})
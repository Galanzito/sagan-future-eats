import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getRestaurants } from '../../actions/GetRestaurantsAction';
import { MyPageTitle } from '../../components/pageTitleBar';
import MyBottonNav from '../../components/material/BottomNav';
import { Input, InputAdornment, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CardsRestaurants from './CardsRestaurants';

const InputSearch = styled(Input)`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  margin:0 16px;
  padding:17px;
  `
const MainWrapper = styled.div`
    width: 360px;
    height: 640px;       
`
const CardsWrapper = styled.div`
  margin:8px 16px;
  border-radius: 8px;  
`
const FilterWrapper = styled.div`
    margin:8px;
    display:flex;
    justify-content:space-evenly;
`

class FeedRestaurants extends Component {

    componentDidMount() {
        if (localStorage.getItem('token') === null) {
            this.props.goToLogin()
          }
        this.props.getRestaurants()
    }

    render() {
        return (
            
            <MainWrapper>
                <MyPageTitle pageTitle={"FutureEats"} />                
                <InputSearch
                    id="input-with-icon-adornment"
                    placeholder="Restaurante"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
                <FilterWrapper>
                    <Typography variant="h6" color="primary">Burger</Typography>
                    <Typography variant="h6">Asiática</Typography>
                    <Typography variant="h6">Massas</Typography>
                </FilterWrapper>
                <CardsWrapper>
                    <CardsRestaurants />
                </CardsWrapper>
                <MyBottonNav />
            </MainWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurants: () => dispatch(getRestaurants()),
        goToLogin: () => dispatch(push(routes.login)),
    }
};


export default connect(null, mapDispatchToProps)(FeedRestaurants)
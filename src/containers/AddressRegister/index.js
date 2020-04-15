import React, { Component } from "react";



import { MyInput } from "../../components/material/Inputs";
import MyButton from "../../components/material/Button";
import { MyPageTitle } from "../../components/pageTitleBar";
import styled from 'styled-components'

const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const FormStyle = styled.form`
  width: 100%;
`

class AddressRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        street: '',
        number: '',
        neighbourhood:'',
        city:'',
        state:'',
        complement:'',
      }
    }
  }

  handleInputValue = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitForm(this.state.form)
    this.setState({
      form: {
        street: '',
        number: '',
        neighbourhood:'',
        city:'',
        state:'',
        complement:'',
      }
    })
  }

  render() {
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle='Endereço'/>
          <FormStyle onSubmit={this.handleSubmit}>
            <MyInput
              name="street"
              type="text"
              label="Logradouro"
              placeholder="Rua / Av."
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.name} />
            <MyInput
              name="number"
              type="number"
              label="Número"
              placeholder="Número"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.email} />
              <MyInput
              name="complement"
              type="text"
              label="Complemento"
              placeholder="Apto. / Bloco"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.cpf} />
            <MyInput
              name="neighbourhood"
              type="text"
              label="Bairro"
              placeholder="Bairro"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
              <MyInput
              name="city"
              type="text"
              label="Cidade"
              placeholder="Cidade"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
              <MyInput
              name="state"
              type="text"
              label="Estado"
              placeholder="Estado"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
            <MyButton btnText="Salvar" />
          </FormStyle>
      </PageWrapper>
    );
  }
}



export default AddressRegister
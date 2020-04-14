import React, { Component } from "react";

import { PageWrapper, FormStyle, LogoFutureEats } from '../style/styles'
import MyButton from "../../components/material/Button";
import { MyInput } from "../../components/material/Inputs";


class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        cpf: '',
        password: '',
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
        name: '',
        email: '',
        cpf: '',
        password: '',
      }
    })
  }

  render() {
    return (
      <PageWrapper>
        <LogoFutureEats src={require("../../images/LogoPage/logo-future-eats-invert.png")} />
        <h3>Cadastrar</h3>
          <FormStyle onSubmit={this.handleSubmit}>
            <MyInput
              name="name"
              type="text"
              label="Nome"
              placeholder="Nome e Sobrenome"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.name} />
            <MyInput
              name="email"
              type="email"
              label="Email"
              placeholder="email@email.com"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.email} />
            <MyInput
              name="cpf"
              type="text"
              label="CPF"
              placeholder="000.000.000-00"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.cpf} />
            <MyInput
              name="password"
              type="password"
              label="Senha"
              placeholder="Mínimo 6 caracteres"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
            <MyInput
              name="password"
              type="password"
              label="Confirmar"
              placeholder="Confirme a senha anterior"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
            <MyButton btnText='Criar' />
          </FormStyle>
      </PageWrapper>
    );
  }
}



export default RegisterPage
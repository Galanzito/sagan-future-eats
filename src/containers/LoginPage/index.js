import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {login} from '../../actions/Auth'
import { routes } from '../Router'
import ButtonStyle from '../../components/button'
import MyTextField from '../../components/input'

import { PageWrapper, ContentWrapper, FormStyle } from '../style/styles'


class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                password: '',
                email: '',
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
        const {form} = this.state
        this.props.login(form.email, form.password)
        this.setState({
            form: {
                password: '',
                email: '',
            }
        })
    }

    render() {
        return (
            <PageWrapper>
                <ContentWrapper>
                    <FormStyle onSubmit={this.handleSubmit}>
                    <h3>Entrar</h3>
                        <MyTextField
                            name="email"
                            type="email"
                            label="Email"
                            required={true}
                            onChange={this.handleInputValue}
                            value={this.state.form.email} />
                        <MyTextField
                            name="password"
                            type="password"
                            label="senha"
                            required={true}
                            onChange={this.handleInputValue}
                            value={this.state.form.password}
                        />
                        <ButtonStyle type="submit" btnText="Entrar" />
                        <p>Não possui cadastro? <span onClick={this.props.goToRegisterPage}>Clique aqui</span></p>
                    </FormStyle>
                </ContentWrapper>
            </PageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToRegisterPage: () => dispatch(push(routes.register)),
        login: (email, password) => dispatch(login(email, password)),
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);
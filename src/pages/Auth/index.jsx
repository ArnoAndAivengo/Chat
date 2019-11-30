import React, { Component } from 'react';
import { LoginForm, RegisterForm } from 'modules';

import "./Auth.scss"
import { Route } from 'react-router-dom'

class Auth extends Component {

    render() {
        return (
            <section className="auth">
                <div className="auth__content">
                    <Route exact path={["/", "/login"]} component={LoginForm}/>
                    <Route exact path="/register" component={RegisterForm}/>
                </div>
            </section>
        )
    };
}

export default Auth;
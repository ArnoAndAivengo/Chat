import React from 'react'
import { Form, Icon, Input } from "antd";
import { Link } from 'react-router-dom'

import { Button, Block } from "components";
import { validateField } from "../../../utils/helpers";

const LoginForm = props => {

    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit
    } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item validateStatus={validateField('email', touched, errors)}
                               help={!touched.email ? "" : errors.email}
                               hasFeedback>
                        <Input
                            id="email"
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            type="mail"
                            placeholder="E-mail"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </Form.Item>
                    <Form.Item validateStatus={validateField("password", touched, errors)}
                               help={ !touched.password ? "" : errors.password }
                               hasFeedback>
                        <Input
                            id="password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            type="password"
                            placeholder="Пароль"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </Form.Item>
                    <Form.Item>
                        {isSubmitting && !isValid && <span>Ошибка!</span>}
                        <Button onClick={handleSubmit}
                                type="primary">
                            Войти в Аккаунт
                        </Button>
                    </Form.Item>
                    <Link className="auth__register"
                          to="/register">
                        Зарегестрироваться
                    </Link>
                </Form>
            </Block>
        </div>
    )
};

export default LoginForm;
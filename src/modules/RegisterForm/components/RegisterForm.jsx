import React from 'react'
import { Form, Icon, Input } from "antd";
import { Link } from 'react-router-dom'

import { Button, Block } from "components";

const success = false;

const RegisterForm = props => {

    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        dirty,
    } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Пожалуйста, зарегестрируйте свой аккаунт</p>
            </div>
            <Block>

                { !success ?
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item validateStatus={ !touched.email ? "" : errors.email ? "error" : "success"}
                                   help={ !touched.email ? "" : errors.email }
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
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                size="large"
                                type="user"
                                placeholder="Ваше имя"
                            />
                        </Form.Item>
                        <Form.Item validateStatus={ !touched.password ? "" : errors.password ? "error" : "success"}
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
                        <Form.Item validateStatus={ !touched.password ? "" : errors.password ? "error" : "success"}
                                   hasFeedback>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                size="large"
                                type="password"
                                placeholder="Повторите Пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={handleSubmit}
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    className="btn login-form-button">
                                Зарегестрироваться
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link className="auth__register-link"
                                  to="/login">
                                Войти в Аккаунт
                            </Link>
                        </Form.Item>
                    </Form> :
                    <div className="auth__success-block">
                        <div><Icon type="info-circle" theme="twoTone"/></div>
                        <h3>Подтвердите свой аккаунт</h3>
                        <p>На Вашу почту отправлено письмо с сылкой на подтверждение аккаунта.</p>
                    </div>
                }
            </Block>
        </div>
    )
}

export default RegisterForm;
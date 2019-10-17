import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => (
    <div className="login-form">
        <h1 className="label">Добро пожаловать на сайт Велес Хоум!</h1>
        <Formik
            initialValues=
            {{
                name: '',
                email: '',
                pass: ''
            }}
            validate={values => {
                let errors = {};
                if(!values.name){
                    errors.name = 'Заполните это поле';
                }
                if(!values.pass){
                    errors.pass = 'Введите пароль';
                }
                if (!values.email) {
                    errors.email = 'Заполните это поле';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Проверьте введенный почтовый адрес';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
        {({ isSubmitting }) => (
            <Form className="fields">
                <Field component="input" name="name" placeholder="Ваше имя"/>
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" placeholder="Почта" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="pass" placeholder="Пароль" />
                <ErrorMessage name="pass" component="div" />
                <button type="submit" disabled={isSubmitting} className="submit-button" >
                    Войти
                </button>
            </Form>
        )}
        </Formik>
    </div>
);

export default LoginForm;
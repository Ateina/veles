import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FeedbackForm = () => (
    <div className="feedback-form">
        <h1 className="label">Свяжитесь с нами, если есть вопросы!</h1>
        <Formik
            initialValues=
            {{
                name: '',
                email: '',
                userRequest: ''
            }}
            validate={values => {
                let errors = {};
                if(!values.name){
                    errors.name = 'Заполните это поле';
                }
                if(!values.userRequest){
                    errors.userRequest = 'Заполните это поле';
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
                <Field component="textarea" name="userRequest" placeholder="Что бы вы хотели спросить" />
                <ErrorMessage name="userRequest" component="div" />
                <button type="submit" disabled={isSubmitting} className="submit-button" >
                    Отправить
                </button>
            </Form>
        )}
        </Formik>
    </div>
);

export default FeedbackForm;
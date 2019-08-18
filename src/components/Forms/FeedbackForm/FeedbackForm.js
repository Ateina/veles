import React from 'react';
import { Formik } from 'formik';

const FeedbackForm = () => (
    <div>
        <h1>Свяжитесь с нами, если есть вопросы!</h1>
        <Formik
            initialValues=
            {
                {
                    name: '',
                    email: '',
                    userRequest: ''
                }
            }
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
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
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.password && touched.password && errors.password}
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="userRequest"
                            name="userRequest"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.userRequest}
                        />
                        {errors.email && touched.email && errors.email}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
        </Formik>
    </div>
);

export default FeedbackForm;
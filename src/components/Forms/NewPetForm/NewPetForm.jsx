import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import "./styles.scss";

export default class NewPetForm extends Component {
    render() {
        return (
            <div className="new-pet-page">
                <div className="new-pet-form">
                <h1 className="label">Заполните форму для нового животного в приюте</h1>
                    <Formik
                        initialValues=
                        {{
                            name: '',
                            type: '',
                            description: '',
                            age: 0,
                            sterilized: false,
                            vaccinated: false,
                            friendly_with: '',
                            special_pet: false,
                            preferred_place_to_live: '',
                            contacts: '',
                            status: ''
                        }}
                        validate={values => {
                            let errors = {};
                            if (!values.name) {
                                errors.name = 'Заполните это поле';
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
                                <Field component="input" name="name" placeholder="Кличка питомца" />
                                <ErrorMessage name="name" component="div" />
                                <Field component="select" name="type">
                                    <option defaultValue value="CAT">Кот</option>
                                    <option value="DOG">Собака</option>
                                    <option value="OTHER">Другое</option>
                                </Field>
                                <Field component="input" name="age" placeholder="Возраст питомца" />
                                <Field component="select" name="friendly_with">
                                    <option defaultValue>Выберите опцию</option>
                                    <option value="OTHER_PETS">Другие животные</option>
                                    <option value="CHILDREN">Дети</option>
                                    <option value="NOBODY">Одиночка</option>
                                </Field>
                                <Field component="select" name="status">
                                    <option defaultValue>Выберите опцию</option>
                                    <option value="SHELTER">Приют</option>
                                    <option value="OTHER">Передержка</option>
                                </Field>
                                <Field component="textarea" name="description" placeholder="Несколько слов о питомце: его история, привычки, что нужно знать будущему хозяину">
                                </Field>
                                <button type="submit" disabled={isSubmitting} className="submit-button" >
                                    Добавить животное
                            </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name cannot exceed 50 characters'),
    number: Yup.string()
      .required('Required')
      .matches(
        /^\+?[0-9]{1,4}?[-. ]?(\(?\d{1,3}?\)?[-. ]?)?[\d-. ]{1,15}$/,
        'Invalid phone number'
      ),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" className="error" />

        <label htmlFor="number">Number</label>
        <Field type="text" id="number" name="number" />
        <ErrorMessage name="number" component="div" className="error" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {FaEnvelope, FaCheckSquare} from 'react-icons/fa';
import axios from 'axios'

import classes from "./BasicForm.module.css"

const BasicForm = (props) => (

  <div id = "contact" className = {classes.BasicForm}>
    <Formik
      initialValues={{ email: '', }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.message) {
            errors.message = 'Required'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm, setStatus}) => {
        setTimeout(() => {
          // console.log('asfasdf')
          // console.log(values.email)
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          const email = {
            name: values.name,
            email: values.email,
            message: values.message
          }

          axios.post('/api/form', {
            email
          })
          console.log("hello")
          resetForm({email: '', name: '', message: ''})

        }, 1600);
        
      }}
    >
      {({ isSubmitting, setStatus }) => (
        <Form className = {classes.Form}>
          <Field type="text" name="name" placeholder = "Your Name" className = {classes.Field} autoComplete = "off"/>
          <Field type="email" name="email" placeholder = "Email address"className = {classes.Field} autoComplete = "off"/>
          <ErrorMessage name="email" component="div" className = {classes.ErrorMessage}/>
          <Field type ="textarea" name = "message" component = "textarea" className = {classes.TextArea}/>
          <ErrorMessage name="message" component="div" className = {classes.ErrorMessage}/>

          <div>{isSubmitting ? 
           <button className = {classes.Submitted} type="submit" disabled={isSubmitting} onClick = {() =>  setStatus({success: "Message sent! Send another?"})}> 
            Success! <FaCheckSquare />
          </button> : <button type="submit" disabled={isSubmitting} onClick = {() =>  setStatus({success: "Message sent! Send another?"})}> 
            <FaEnvelope />
          </button>
        }
          </div>
          {/* <div className = {classes.Success}>{isSubmitting ? 'Message Sent!' : ''}</div> */}
        </Form>
      )}
      
    </Formik>
  </div>
);

export default BasicForm;
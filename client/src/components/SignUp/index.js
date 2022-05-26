import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './signup.css';

export default function Signup() {
    const signupValidation = Yup.object().shape({
        first_name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        last_name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        password: Yup.string()
          .min(7, 'Password should have minimum 8 characters') 
          .max(20, 'Too long')
          .matches(
            "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          )
          .required('Required'),
        confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

    return(
        <div className="signup">
            <div>
            <h2> SignUp </h2>
            <div> We do not share your personal details with anyone </div>
            </div>
            <div className="signup-form"> 
            <Formik
                initialValues={{ first_name: "", last_name: "", email: "", password: "", confirm_password: "" }}
                validationSchema={signupValidation}
                onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched }) => (
                <Form className="form">
                <div className="input-container">
                <Field id="first_name" name="first_name" type="text" placeholder=" "/>
                <label htmlFor="first_name"> First Name </label>
                {errors.first_name && touched.first_name ? ( <div className="error">{errors.first_name}</div> ) : null}
                </div>

                <div className="input-container">
                <Field id="last_name" name="last_name" type="text" placeholder=" "/>
                <label htmlFor="last_name"> Last Name </label>
                {errors.last_name && touched.last_name ? ( <div className='error'>{errors.last_name}</div> ) : null}
                </div>

                <div className="input-container">
                <Field id="email" name="email" type="email" placeholder=" "/>
                <label htmlFor="email"> Email </label>
                {errors.email && touched.email ? ( <div className='error'>{errors.email}</div> ) : null}
                </div>

                <div className="input-container">
                <Field id="password" name="password" type="password" placeholder=" "/>
                <label htmlFor="password"> Password </label>
                {errors.password && touched.password ? ( <div className='error'>{errors.password}</div> ) : null}
                </div>

                <div className="input-container">
                <Field id="confirm_password" name="confirm_password" type="password" placeholder=" "/>
                <label htmlFor="confirm_password"> Confirm Password </label>
                {errors.confirm_password && touched.confirm_password ? ( <div className='error'>{errors.confirm_password}</div> ) : null}
                </div>

                <button type="submit">Signup</button>
                </Form>
                )}
            </Formik>
             </div>
        </div>
    )
}
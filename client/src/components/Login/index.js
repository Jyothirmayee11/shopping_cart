import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import "../SignUp/signup.css";

export default function Login() {
  const navigate = useNavigate();
  const { setUserLogIn } = useAuth();
  const signupValidation = Yup.object().shape({
    password: Yup.string()
      .min(7, "Password should have minimum 8 characters")
      .max(20, "Too long")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div className="signup">
      <div>
        <h2> Login </h2>
        <div> Get access to your orders, Wishlist and Recommendations </div>
      </div>
      <div className="signup-form">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signupValidation}
          onSubmit={async (values) => {
            navigate("/home");
            setUserLogIn(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <div className="input-container">
                <Field id="email" name="email" type="email" placeholder=" " />
                <label htmlFor="email"> Email </label>
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>

              <div className="input-container">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder=" "
                />
                <label htmlFor="password"> Password </label>
                {errors.password && touched.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}
              </div>

              <button type="submit">Signup</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

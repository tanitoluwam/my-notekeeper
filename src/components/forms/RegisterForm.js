import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../shared/FormikControl";
import { registerUser } from "service";
import { AuthLayout } from "../../layout/AuthLayout";
import { CustomButton } from "../CustomButton/CustomButton";
import { Dashboard } from "pages/Dashboard";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().min(6).required("Password is required"),
    name: Yup.string().required("name is required"),
  });

  const onSubmit = async (values) => {
    const res = await registerUser(values);
    if (res) {
      console.log(res.user.name);
      navigate("/");
    }
  };

  return (
    <AuthLayout
      greeting=" Hello Friend,"
      tagline="To keep connected with us, please sign up with your personal
    info"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className="col-6  w-50 login-details">
              <Form>
                <h2 className="mb-3 fs-2 text-center fw-bold">
                  Glad to meet you
                </h2>
                <div className="mb-1 mx-auto w-50">
                  <FormikControl
                    control="input"
                    type="email"
                    name="email"
                    label="Email"
                    className="form-control mb-2 bg-light mx-auto py-2"
                    value={formik.values.email}
                  />
                </div>
                <div className="mb-1 mx-auto w-50">
                  <FormikControl
                    control="input"
                    type="text"
                    name="name"
                    label="Name"
                    className="form-control mb-2 bg-light mx-auto py-2"
                    value={formik.values.name}
                  />
                </div>
                <div className="mb-1 mx-auto w-50">
                  <FormikControl
                    control="input"
                    type="password"
                    name="password"
                    label="Password"
                    className="form-control mb-2 bg-light mx-auto py-2"
                    value={formik.values.password}
                  />
                </div>
                <div className="mb-3 text-center">
                  <Link className="text-decoration-none link-color" to="/">
                    Already have an account?
                  </Link>
                </div>
                <CustomButton
                  text="Sign up"
                  disabled={!formik.isValid || formik.isSubmitting}
                />
              </Form>
            </div>
          );
        }}
      </Formik>
    </AuthLayout>
  );
};

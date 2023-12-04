import { Link, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../shared/FormikControl";
import { loginUser } from "../../service";
import { AuthLayout } from "../../layout/AuthLayout";
import { CustomButton } from "../CustomButton/CustomButton";
import { useLoadingContext } from "context/LoadingContext/LoadingContext";
import { useAuthContext } from "context/AuthContext/AuthContext";

export const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    const res = await loginUser(values);
    if (res) {
      navigate(redirectPath, { replace: true });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <AuthLayout
            greeting="Hey, Welcome Back!"
            tagline="To keep connected with us, please login with your personal
          info"
          >
            <div className="col-6  w-50 login-details">
              <Form>
                <h2 className="mb-3 fs-2 text-center fw-bold">Login</h2>
                <div className="mb-1 mx-auto w-50">
                  <FormikControl
                    control="input"
                    type="email"
                    name="email"
                    label="Email"
                    className="form-control  mb2 bg-light mx-auto py-2"
                    value={formik.values.email}
                  />
                </div>
                <div className="mb-1 mx-auto w-50">
                  <FormikControl
                    control="input"
                    type="password"
                    name="password"
                    label="Password"
                    className="form-control  mb2 bg-light mx-auto py-2"
                    value={formik.values.password}
                  />
                </div>
                <div className="mb-3 text-center">
                  <Link
                    className="text-decoration-none link-color"
                    to="/forgot-password"
                  >
                    Forgot password?
                  </Link>
                </div>
                <CustomButton
                  text="login"
                  disabled={!formik.isValid || formik.isSubmitting}
                />
              </Form>
            </div>
          </AuthLayout>
        );
      }}
    </Formik>
  );
};

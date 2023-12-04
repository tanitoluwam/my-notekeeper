
import { useFormik } from "formik";
import { AuthLayout } from "../../layout/AuthLayout";
import { CustomButton } from "../CustomButton/CustomButton";

const initialValues = {
  email: "",
};
const onSubmit = (values) => {
  console.log(values)
};
const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  return errors;
};
export const ForgotPasswordForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("visited field", formik.touched);
  return (
    <AuthLayout
      greeting="Welcome Back!"
      tagline=" Ready for another amazing experience?"
    >
      <form
        onSubmit={formik.handleSubmit}
        className="col-6  create-account  w-50"
      >
        <h2 className="mb-3 fs-2 fw-bold text-center">Forgot Password?</h2>
        <p className="text-center w-50 mx-auto">
          Don't worry, we'll send you an email with a reset link.
        </p>
        <div className="mb-3 w-50 mx-auto">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control mb3 bg-light mx-auto py-2"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <div id="emailHelp" className="form-text text-danger">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <CustomButton  text="Reset password" disabled={!formik.isValid || formik.isSubmitting}/>
      </form>
    </AuthLayout>
  );
};

// this form used useformik hook unlike the remaining two that use yup.

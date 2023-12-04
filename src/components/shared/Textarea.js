import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextError } from "./TextError";

export const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control ">
      <label htmlFor={name} className="form-label mt-3">
        {label}
      </label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

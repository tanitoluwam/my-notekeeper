import React from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
//  this component determines which of the form fields will be rendered based on a prop
export const FormikControl = (props) => {
  const { control, ...rest } = props;
  // destructuring, where control is the props
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    default:
      return null;
  }
};

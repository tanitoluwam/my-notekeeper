import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "service";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../shared/FormikControl";
import { CustomButton } from "../CustomButton/CustomButton";

export const CreateNote = () => {
  const [createdNote, setCreatedNote] = useState([]);
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    description: "",
    note: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    note: Yup.string().required("note is required"),
    description: Yup.string()
      .required("enter a valid description")
      .min(5, "description must be at least 5 characters long"),
  });

  const onSubmit = async (values) => {
    const res = await createNote(values);
    if (res) {
      setCreatedNote(res);
      navigate("/");
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
          <div className="row">
            <div className="col-6 w-50 ">
              <Form>
                <div className="mb-3  w-75 mx-auto mt-5">
                  <FormikControl
                    control="input"
                    type="text"
                    name="title"
                    label="Title"
                    className="form-control mb-5  mx-auto py-2 border-bottom border-dark"
                    value={formik.values.title}
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    name="description"
                    label="Description"
                    className="form-control mb-5  mx-auto py-2 border-bottom border-dark"
                    value={formik.values.description}
                  />
                  <FormikControl
                    control="textarea"
                    type="text"
                    name="note"
                    label="Notes"
                    rows="15"
                    placeholder="add  your notes"
                    className="form-control border-dark"
                    value={formik.values.note}
                  />
                </div>
                <div className="d-flex justify-content-between w-25 mx-auto">
                  <CustomButton
                    text="save"
                    disabled={!formik.isValid || formik.isSubmitting}
                  />
                  <CustomButton
                    text="cancel"
                    disabled={!formik.isValid || formik.isSubmitting}
                  />
                </div>
              </Form>
            </div>
            <div className=" col-6 bg-white container w-50 vh-100">
              <div className="row flex justify-content-center h-100">
                <div className="bg-dark text-light p-5">
                  <div className="d-flex justify-content-between">
                    <h5 className="border-bottom mb-2">
                      {formik.values.title}
                    </h5>
                  </div>
                  <h6 className="border-bottom mb-2">
                    {formik.values.description}
                  </h6>
                  <p className="note-details">{formik.values.note}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

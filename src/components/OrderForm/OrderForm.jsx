import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./OrderForm.module.css";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button/Button";
import { toast, Toaster } from "react-hot-toast";

const orderSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Required"),
  email: Yup.string()
    .email()
    .min(3, "Too short!")
    .max(60, "Too long!")
    .required("Required"),
  date: Yup.date().min(new Date()).required("Required"),
  comment: Yup.string().min(10, "Too short!").max(300, "Too long!"),
});

const initialValues = {
  name: "",
  email: "",
  date: new Date(),
  comment: "",
};

const handleSubmit = (values, { resetForm }) => {
  toast.success("Order for the camper has been successfully sent!");
  resetForm();

  //Send values to backend
};

export default function OrderForm() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.inputContainer}>
            <Field className={css.input} name="name" placeholder={"Name*"} />
            <div className={css.errorWrapper}>
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>
          </div>
          <div className={css.inputContainer}>
            <Field className={css.input} name="email" placeholder={"Email*"} />
            <div className={css.errorWrapper}>
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </div>
          </div>
          <div className={css.inputContainer}>
            <div className={css.input}>
              <Field name="date" readOnly>
                {({ form }) => (
                  <DatePicker
                    selected={form.values.date}
                    onChange={(date) => form.setFieldValue("date", date)}
                    className={css.datepicker}
                    dateFormat="MMMM, d"
                    minDate={new Date()}
                    popperClassName={`myCustomDatepickerPopper ${css.customPopper}`}
                    customInput={
                      <input
                        readOnly
                        value={form.values.date}
                        placeholder="Booking date*"
                        className={css.dataInput}
                        // readOnly
                      />
                    }
                  />
                )}
              </Field>
            </div>
            <div className={css.errorWrapper}>
              <ErrorMessage
                className={css.error}
                name="date"
                component="span"
              />
            </div>
          </div>
          <div className={css.inputContainer}>
            <Field
              as="textarea"
              className={`${css.input} ${css.textarea}`}
              name="comment"
              placeholder={"Comment*"}
            />
            <div className={css.errorWrapper}>
              <ErrorMessage
                className={css.error}
                name="comment"
                component="span"
              />
            </div>
          </div>
          <Button styles={css.button}>Send</Button>
        </Form>
      </Formik>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: "1px solid var(--rating)",
            padding: "16px",
            color: "var(--main)",
          },
          success: {
            iconTheme: {
              primary: "green",
              secondary: "#fff",
            },
          },
        }}
      />
    </div>
  );
}

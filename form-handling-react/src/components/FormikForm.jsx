import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    console.log("Formik Submission:", values);
    setTimeout(() => {
      setStatus("🎉 User registered successfully!");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Register with Formik</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className="space-y-4">
            {status && <p className="text-green-600">{status}</p>}

            <div>
              <label className="block font-medium">Username</label>
              <Field
                name="username"
                type="text"
                autoComplete="username"
                className="w-full border px-3 py-2 rounded-md"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <Field
                name="email"
                type="email"
                autoComplete="email"
                className="w-full border px-3 py-2 rounded-md"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Password</label>
              <Field
                name="password"
                type="password"
                autoComplete="new-password"
                className="w-full border px-3 py-2 rounded-md"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
import React from "react";
import InputBox from "../components/InputBox";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import { forgotPasswordValidationSchema } from "../formik/yup/YupValidationSchema";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full 3xl:max-w-[1660px] center mx-auto">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ handleBlur, handleChange, values, touched, errors, isValid }) => (
          <Form className="w-[300px] md:w-[400px] p-5 rounded-md shadow-lg shadow-gray-300 ">
            <h1 className="head-1 text-center">FORGOT PASSWORD</h1>
            <div className="flex flex-col center mt-5">
              <div className="mt-5 w-full">
                <InputBox
                  name={"email"}
                  key={"email"}
                  type="email"
                  placeholder="Email"
                  icon={<MdEmail />}
                  customClass={
                    touched.email && errors.email ? "input-error" : ""
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-[0.8rem]"
                />
              </div>
              <button
                type="submit"
                className={"bg-black hover:bg-gray-800 w-[80%] mt-6 py-2 rounded-md text-white "+ (!isValid ? "cursor-not-allowed":"")}
              >
                SUBMIT
              </button>
            </div>
            <hr className="mt-5" />
            <p className="text-gray-600 text-center mt-2">
              Back to{" "}
              <span
                className="hover:underline cursor-pointer text-black"
                onClick={() => navigate("/signin")}
              >
                Signin
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;

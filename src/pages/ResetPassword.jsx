import React from "react";
import InputBox from "../components/InputBox";
import { FaKey } from "react-icons/fa";
import { ErrorMessage, Form, Formik } from "formik";
import { passwordResetValidationSchema } from "../formik/yup/YupValidationSchema";

const ResetPassword = () => {
  return (
    <div className="h-screen w-full 3xl:max-w-[1660px] center mx-auto">
      <Formik
        initialValues={{ password: "", cpassword: "" }}
        validationSchema={passwordResetValidationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      
      >
        {({ handleBlur, handleChange, values, touched, errors, isValid }) => (
          <Form className="w-[300px] md:w-[400px] p-5 rounded-md shadow-lg shadow-gray-400 ">
            <h1 className="head-1 text-center">RESET PASSWORD</h1>
            <div className="flex flex-col center mt-5">
              <div className="mt-4 w-full">
                <InputBox
                  name={"password"}
                  key={"password"}
                  type="text"
                  placeholder="Enter New Password"
                  icon={<FaKey />}
                  customClass={
                    touched.password && errors.password
                      ? "input-error"
                      : "" +
                        (touched.cpassword && !errors.cpassword
                          ? " border-green "
                          : "")
                  }
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-[0.8rem]"
                />
              </div>

              <div className="mt-5 w-full">
                <InputBox
                  name={"cpassword"}
                  key={"cpassword"}
                  type="password"
                  placeholder="Confirm Password"
                  icon={<FaKey />}
                  customClass={
                    touched.cpassword && errors.cpassword
                      ? " input-error "
                      : "" +
                        (touched.cpassword && !errors.cpassword
                          ? "border-green"
                          : "")
                  }
                  value={values.cpassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="cpassword"
                  component="p"
                  className="text-red-500 text-[0.8rem]"
                />
              </div>

              <button
                type="submit"
                className={"bg-black hover:bg-gray-800 w-[80%] mt-6 py-2 rounded-md text-white" + (!isValid ? " cursor-not-allowed " : "")}
              >
                SUBMIT
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;

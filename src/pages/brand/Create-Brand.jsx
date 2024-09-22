import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import InputBox from "../../components/InputBox";
import { nameValidationSchema } from "../../formik/yup/YupValidationSchema";
import ImgUploader from "../../components/image-uploader";

const CreateBrand = () => {

const list=[]

  return (
    <div className="p-2 w-full min-h-full bg-white flex justify-center items-start pt-10 md:pt-[10rem]">
      <Formik
        initialValues={{ brand_name: "" ,url:"" }}
        validationSchema={nameValidationSchema}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {({ handleChange, isValid,values,touched,errors,handleBlur,setFieldValue,setFieldTouched,setFieldError}) => (
          <Form className="w-[280px] md:w-[500px]">
            <h1 className="text-xl md:text-2xl font-semibold uppercase">
              Create (Brand )
            </h1>
            <div className="mt-5">
              <div className="mt-2">
                <InputBox
                  name="brand_name"
                  placeholder="Brand Name"
                  type="text"
                  customClass={touched.brand_name && errors.brand_name ? "input-error" : ""}
                  value={values.brand_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="brand_name" component="p" className='text-red-500 text-[0.8rem]' />
              </div>
              <div className="mt-3">
                <ImgUploader uploadedList={list} multiple={true} />
                <ErrorMessage name="brand_name" component="p" className='text-red-500 text-[0.8rem]' />
              </div>
            </div>
            <button type="submit" className="flex w-[80%] mx-auto rounded-lg justify-center items-center bg-black text-white mt-8 p-3 text-center">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateBrand;

import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import InputBox from '../components/InputBox';
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { siginValidationSchema } from '../formik/yup/YupValidationSchema';
import { useNavigate } from 'react-router-dom';

const Sigin = () => {

  const navigate = useNavigate();

  const [loading,setLoading] = useState(false);

  return (
    <div className='w-full h-screen center'>
      <Formik
        initialValues={{ email: '', password: '' }}  
        validationSchema={siginValidationSchema} 
        onSubmit={(values) => {
          setLoading(true)
         alert(JSON.stringify(values))
         setTimeout(()=>{
          setLoading(false)
         },5000);
        }}
      >
        {({ handleChange, handleBlur, values ,touched,errors,isValid}) => (
          <Form className='min-w-[300px] md:w-[400px] shadow-lg rounded-md shadow-gray-300 p-5'>
            <h1 className='head-1 text-center py-2'>SIGN IN</h1>
            <div className='mt-5 flex flex-col'>
              <div className='mt-2'>
                <InputBox
                  name="email"
                  placeholder='Email'
                  type='text'
                  customClass={touched.email && errors.email ? "input-error":""}
                  icon={<MdEmail />}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="email" component="p" className='text-red-500 text-[0.8rem]' />
              </div>

              <div className='mt-4'>
                <InputBox
                  name="password"
                  placeholder='Password'
                  type='password'
                  customClass={touched.password && errors.password ? "input-error":""}
                  icon={<FaKey />}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="password" component="p" className='text-red-500 text-[0.8rem]' />
              </div>

              <p className='text-[0.8rem] text-end font-semibold mt-1 cursor-pointer hover:underline hover:text-gray-600' onClick={()=>navigate("/forgotpassword")}>
                Forgot Password?
              </p>

              <button className={'w-[80%] mt-4 mx-auto bg-black py-2 rounded-md text-white hover:bg-gray-800 '+ (!isValid ? "cursor-not-allowed":"") } type='submit'>
               {loading ? ".....":""} LOGIN
              </button>
            </div>

            <div className='mt-2  gap-2  center'>
            <hr className='flex-1'/>
            <span className='text-gray-400 text-[0.7rem]'>OR</span>
            <hr className='flex-1'/>
            </div>
            
            <p className='text-[0.9rem] text-center mt-2 text-gray-500'>
              Doesn't have an account? <span className='text-black cursor-pointer hover:underline' onClick={()=>navigate("/signup")}>Create</span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Sigin;


import * as Yup from 'yup';

export const siginValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')  
      .required('Email is required'),  
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'), 
  });

  export const sigupValidationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required'), 
    email: Yup.string()
      .email('Invalid email address')  
      .required('Email is required'),  
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'), 
  });

  export const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')  
      .required('Email is required'),   
  });

  export const passwordResetValidationSchema= Yup.object({
    password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
    cpassword:Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required("Confirm password is required")   
  });

  export const nameValidationSchema = Yup.object({
    brand_name: Yup.string()
      .required('Required!!'),  
      url: Yup.string()
      .required('Required!!'), 
  });
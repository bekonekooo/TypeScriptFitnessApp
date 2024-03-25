import * as Yup from 'yup';

export const schema = Yup.object().shape({
    name: Yup.string().required('Name is required').max(40, 'Max length is 40 characters'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    message: Yup.string().required('Message is required').max(400, 'Max length is 400 characters'),
  });
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  BtnAddContact,
  ErrorMsg,
  FieldForm,
  StyledForm,
} from './ContactForm.styled';

const builderSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('This field is required'),
  number: Yup.string().min(7, 'Too Short!').required('This field is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onAdd }) => {
  const onSubmit = (values, form) => {
    form.resetForm();
    onAdd(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={builderSchema}
    >
      <StyledForm>
        <label>
          Name
          <FieldForm id={nanoid()} name="name" />
          <ErrorMsg component="p" name="name" />
        </label>

        <label>
          Number
          <FieldForm type="tel" id={nanoid()} name="number" />
          <ErrorMsg component="p" name="number" />
        </label>

        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </StyledForm>
    </Formik>
  );
};

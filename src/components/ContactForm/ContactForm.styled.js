import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  border: 1px solid #159876;
  padding: 15px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FieldForm = styled(Field)`
  margin-left: 20px;
  padding: 5px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

export const BtnAddContact = styled.button`
  margin: 0 auto;
  border-radius: 4px;
  font-weight: 600;
  width: 150px;
  padding: 10px;

  &:hover,
  &:focus {
    cursor: pointer;

    background-color: #119875;
  }
`;

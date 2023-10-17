import { FormInput } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FormInput>
      <label>
        Find contacts by name
        <input type="text" name="input" value={filter} onChange={onChange} />
      </label>
    </FormInput>
  );
};

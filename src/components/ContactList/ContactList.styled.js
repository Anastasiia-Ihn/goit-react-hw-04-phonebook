import styled from 'styled-components';

export const List = styled.ul`
  list-style: square;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 15px;
`;

export const BtnDeleteContact = styled.button`
  border-radius: 4px;
  font-weight: 600;
  height: 40px;
  width: 80px;
  padding: 5px;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #119875;
  }
`;

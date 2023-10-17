import { BtnDeleteContact, List, ListItem } from './ContactList.styled';

export const ContactList = ({ listContacts, onDelete }) => {
  return (
    <List>
      {listContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <BtnDeleteContact onClick={() => onDelete(id)}>
            {' '}
            Delete
          </BtnDeleteContact>
        </ListItem>
      ))}
    </List>
  );
};

//

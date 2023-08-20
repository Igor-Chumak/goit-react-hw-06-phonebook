import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';
import { getContacts, getFilter } from 'store/selectors';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const handleDelete = itemId => dispatch(deleteContact(itemId));

  const contactsToList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactListBox onClick={e => handleDelete(e.target.id)}>
      {contactsToList.map(({ id, name, number }) => (
        <ContactItems name={name} number={number} id={id} key={id} />
      ))}
    </ContactListBox>
  );
};

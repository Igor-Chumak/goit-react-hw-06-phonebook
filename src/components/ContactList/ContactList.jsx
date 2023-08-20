import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const contactsToList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactListBox>
      {contactsToList.map(({ id, name, number }) => (
        <ContactItems name={name} number={number} id={id} key={id} />
      ))}
    </ContactListBox>
  );
};

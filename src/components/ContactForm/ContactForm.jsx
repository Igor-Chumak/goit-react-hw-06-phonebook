import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contactsSlice';
import { getContacts } from 'store/selectors';
import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormSubmit,
} from './ContactForm.styled';

export const ContactForm = ({ setNotification }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const searchContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('name :>> ', name);
    console.log('number :>> ', number);
    const form = e.currentTarget;
    if (name === '' || number === '') {
      // form.reset();
      // setName('');
      // setNumber('');
      return;
    }
    //
    const searchResult = searchContact(name);
    if (!searchResult) {
      dispatch(addContact({ name, number }));
      form.reset();
      setName('');
      setNumber('');
      return true;
    } else {
      setNotification(
        `${searchResult.name} : ${searchResult.number} is already in contacts`
      );
      return false;
    }
  };

  return (
    <ContactFormForm onSubmit={handleSubmit}>
      <ContactFormLabel>
        Name
        <ContactFormInput
          type="text"
          name="name"
          minLength="2"
          maxLength="22"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder=""
          required
          onChange={e => setName(e.target.value.trim())}
        />
      </ContactFormLabel>
      <ContactFormLabel>
        Number
        <ContactFormInput
          type="tel"
          name="number"
          minLength="7"
          maxLength="17"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder=""
          required
          onChange={e => setNumber(e.target.value)}
        />
      </ContactFormLabel>
      <ContactFormSubmit type="submit">Add contact</ContactFormSubmit>
    </ContactFormForm>
  );
};

ContactForm.propTypes = {
  setNotification: PropTypes.func.isRequired,
};

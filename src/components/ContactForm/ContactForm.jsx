import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormSubmit,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (name === '' || number === '') {
      return;
    }
    if (onSubmit({ name, number })) {
      form.reset();
      setName('');
      setNumber('');
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
  onSubmit: PropTypes.func.isRequired,
};

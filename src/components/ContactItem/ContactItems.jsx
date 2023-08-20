import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Delete } from 'components';
import { ContactItem } from './ContactItems.styled';
import { deleteContact } from 'store/contactsSlice';

export const ContactItems = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = itemId => dispatch(deleteContact(itemId));
  return (
    <ContactItem>
      {name} : {number}
      <Delete type="button" id={id} onClick={() => handleDelete(id)}>
        Delete
      </Delete>
    </ContactItem>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

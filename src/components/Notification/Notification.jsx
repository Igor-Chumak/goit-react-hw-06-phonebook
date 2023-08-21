import PropTypes from 'prop-types';
import { OkButton } from 'components';
import { Message, NotificationBox } from './Notification.styled';

export const Notification = ({ message, setNotification }) => {
  return (
    <NotificationBox>
      <Message>{message}</Message>
      <OkButton type="button" onClick={() => setNotification('')}>
        OK
      </OkButton>
    </NotificationBox>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  setNotification: PropTypes.func.isRequired,
};

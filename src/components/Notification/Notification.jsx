import { useDispatch, useSelector } from 'react-redux';
import { getNotification } from 'store/selectors';
import { OkButton } from 'components';
import { setNotification } from 'store/notificationSlice';
import { Message, NotificationBox } from './Notification.styled';

export const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(getNotification);

  return (
    notification && (
      <NotificationBox>
        <Message>{notification}</Message>
        <OkButton type="button" onClick={() => dispatch(setNotification(''))}>
          OK
        </OkButton>
      </NotificationBox>
    )
  );
};

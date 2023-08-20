import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import { useLocalStorage } from 'react-recipes';
import {
  Header,
  Section,
  CreateThemeSwitcher,
  ContactForm,
  ContactList,
  Notification,
  Filter,
  OkButton,
} from 'components';
import { getContacts } from 'store/selectors';
import { addContact } from 'store/contactsSlice';
import { localStorageKey } from 'store/initialization';

const localStorageTheme = localStorageKey + '_theme';

export const App = () => {
  const [modeTheme, setModeTheme] = useLocalStorage(localStorageTheme);

  const contacts = useSelector(getContacts);
  const [notification, setNotification] = useState('');

  const handleToggleTheme = () => {
    setModeTheme(prevModeTheme =>
      prevModeTheme === 'dark' ? 'light' : 'dark'
    );
  };

  const onSubmit = dataForm => {
    const searchResult = searchContact(dataForm);
    if (!searchResult) {
      addContact(dataForm);
      return true;
    } else {
      setNotification(
        `${searchResult.name} : ${searchResult.number} is already in contacts`
      );
      return false;
    }
  };

  const handleOkButton = () => {
    setNotification('');
  };

  const searchContact = ({ name }) => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  // const createContactsToList = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter)
  //   );
  // };

  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...(modeTheme === 'dark' ? darkTheme : lightTheme),
      }}
    >
      <GlobalStyles />
      <Header>
        <CreateThemeSwitcher
          handleToggleTheme={handleToggleTheme}
          modeTheme={modeTheme === 'dark' ? true : false}
        />
      </Header>
      <main>
        <Section title="Phonebook">
          <ContactForm onSubmit={onSubmit} />
          {notification && (
            <Notification message={notification}>
              <OkButton type="button" onClick={handleOkButton}>
                OK
              </OkButton>
            </Notification>
          )}
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList contactsToList="" />
        </Section>
      </main>
    </ThemeProvider>
  );
};

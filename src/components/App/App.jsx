import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import { useLocalStorage } from 'react-recipes';
import { loadFromLocalStorage } from 'utilities/localStorage';
import { INITIAL_CONTACTS } from 'data/initial';
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

const localStorageKey = 'phonebook';
const localStorage_contacts = loadFromLocalStorage(localStorageKey) ?? [];
export const initial_contacts = !localStorage_contacts.length
  ? [...INITIAL_CONTACTS]
  : [...localStorage_contacts];
// console.log('initial_contacts :>> ', initial_contacts);

const localStorageTheme = localStorageKey + '_theme';

export const App = () => {
  const [modeTheme, setModeTheme] = useLocalStorage(localStorageTheme);

  const [contacts, setContacts] = useLocalStorage(
    localStorageKey,
    initial_contacts
  );

  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState('');

  const handleToggleTheme = () => {
    setModeTheme(prevModeTheme =>
      prevModeTheme === 'dark' ? 'light' : 'dark'
    );
  };

  const onSubmit = dataForm => {
    const searchResult = searchContact(dataForm);
    if (!searchResult) {
      setContacts(prevState => [{ id: nanoid(), ...dataForm }, ...prevState]);
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

  const createContactsToList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContactsFromList = idItem => {
    return setContacts(prevValue =>
      prevValue.filter(item => item.id !== idItem)
    );
  };

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
          <ContactList
            contactsToList={createContactsToList()}
            deleteContactsFromList={deleteContactsFromList}
          />
        </Section>
      </main>
    </ThemeProvider>
  );
};
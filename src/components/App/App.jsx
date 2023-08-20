import { useState } from 'react';
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
import { localStorageKey } from 'store/initialization';

const localStorageTheme = localStorageKey + '_theme';

export const App = () => {
  const [modeTheme, setModeTheme] = useLocalStorage(localStorageTheme);
  const [notification, setNotification] = useState('');

  const handleToggleTheme = () => {
    setModeTheme(prevModeTheme =>
      prevModeTheme === 'dark' ? 'light' : 'dark'
    );
  };

  const handleOkButton = () => {
    setNotification('');
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
          <ContactForm setNotification={setNotification} />
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

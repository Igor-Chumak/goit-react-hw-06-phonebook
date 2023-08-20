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
} from 'components';
import { LOCAL_STORAGE_KEY } from 'store/store';

const localStorageTheme = LOCAL_STORAGE_KEY + '_theme';

export const App = () => {
  const [modeTheme, setModeTheme] = useLocalStorage(localStorageTheme);

  const handleToggleTheme = () => {
    setModeTheme(prevModeTheme =>
      prevModeTheme === 'dark' ? 'light' : 'dark'
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
          <ContactForm />
          <Notification />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList contactsToList="" />
        </Section>
      </main>
    </ThemeProvider>
  );
};

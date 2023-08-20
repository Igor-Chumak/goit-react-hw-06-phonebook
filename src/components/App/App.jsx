import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import { getModeTheme } from 'store/selectors';
import {
  Header,
  Section,
  CreateThemeSwitcher,
  ContactForm,
  ContactList,
  Notification,
  Filter,
} from 'components';

export const App = () => {
  const modeTheme = useSelector(getModeTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...(modeTheme === 'dark' ? darkTheme : lightTheme),
      }}
    >
      <GlobalStyles />
      <Header>
        <CreateThemeSwitcher />
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

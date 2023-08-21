import {
  Header,
  Section,
  CreateThemeSwitcher,
  ContactForm,
  ContactList,
  Filter,
} from 'components';

export const App = () => {
  return (
    <>
      <Header>
        <CreateThemeSwitcher />
      </Header>
      <main>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </main>
    </>
  );
};

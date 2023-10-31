import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

//STYLED
import { TitlePhonebook, TitleContacts, ContainerWrapper } from './App.styled';

// NOTIFY
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <ContainerWrapper>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
      <Toaster />
    </ContainerWrapper>
  );
};

export { App };

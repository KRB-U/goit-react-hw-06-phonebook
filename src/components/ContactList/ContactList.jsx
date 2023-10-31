import { useDispatch, useSelector } from 'react-redux';
import { Button, ContactItem } from './ContactList.styled';

import { deleteContact } from 'components/redux/action';

const ContactList = () => {
  const dispatch = useDispatch();

  const allContacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = filter
    ? allContacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : allContacts;

  return (
    <div>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            {name}: {number}
            <Button type="submit" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };

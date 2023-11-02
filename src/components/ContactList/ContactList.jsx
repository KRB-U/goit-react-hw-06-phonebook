import { useDispatch, useSelector } from 'react-redux';
import { Button, ContactItem } from './ContactList.styled';

// import { deleteContact } from 'components/redux/action';
import { deleteContact } from 'components/redux/contactSlice';

import toast from 'react-hot-toast';

const ContactList = () => {
  const dispatch = useDispatch();

  const allContacts = useSelector(state => state.contacts);
  // console.log(allContacts);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = filter
    ? allContacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : allContacts;

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.success('Видалено');
  };

  return (
    <div>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            {name}: {number}
            <Button type="submit" onClick={() => handleDeleteContact(id)}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };

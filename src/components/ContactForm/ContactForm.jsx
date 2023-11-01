import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/action';
import { nanoid } from 'nanoid';

// NOTIFY
import toast from 'react-hot-toast';

import {
  FormContainer,
  LabelInputName,
  InputName,
  LabelInputPhone,
  InputPhone,
  Button,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(state => state.contacts.contacts);

  const formNameUniqueKey = nanoid(10);
  const formNumberUniqueKey = nanoid(7);

  const handleSubmit = evt => {
    evt.preventDefault();

    const name = evt.target.name.value;
    const number = evt.target.number.value;

    const isNameInContacts = allContacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    toast.success('Додано');

    evt.target.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <LabelInputName htmlFor={formNameUniqueKey}>
          Name
          <InputName type="text" name="name" required id={formNameUniqueKey} />
        </LabelInputName>

        <LabelInputPhone htmlFor={formNumberUniqueKey}>
          Number
          <InputPhone
            type="tel"
            name="number"
            required
            id={formNumberUniqueKey}
          />
        </LabelInputPhone>

        <Button type="submit">Add contact</Button>
      </form>
    </FormContainer>
  );
};

export { ContactForm };

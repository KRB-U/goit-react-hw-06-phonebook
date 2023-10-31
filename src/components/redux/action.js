import { nanoid } from 'nanoid';

export const addContact = obj => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      ...obj,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilterValue = filterValue => {
  return {
    type: 'filter/setFilterValue',
    payload: filterValue,
  };
};

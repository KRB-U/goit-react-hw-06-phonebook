// import { nanoid } from 'nanoid';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactsData from 'jsonData/contactsData.json';

const contactInitialState = contactsData;
// new
// export const addContact = createAction('contacts/addContact', obj => {
//   return {
//     payload: {
//       id: nanoid(),
//       ...obj,
//     },
//   };
// });

// old
// export const addContact = obj => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       ...obj,
//     },
//   };
// };
// new
// export const deleteContact = createAction(
//   'contacts/deleteContact',
//   contactId => {
//     return {
//       payload: contactId,
//     };
//   }
// );

// old
// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
// new
// export const contactReducer = createReducer(contactInitialState, {
//   [addContact]: (state, action) => {
//     return [...state, action.payload];
//   },

//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });

// old
// export const contactReducer = (state = contactInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return {
//         contacts: [...state.contacts, action.payload],
//       };

//     case deleteContact.type:
//       return {
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            id: nanoid(),
            ...value,
          },
        };
      },
    },

    deleteContact(state, action) {
      // return state.filter(contact => contact.id !== action.payload);
      const idx = state.findIndex(contact => contact.id === action.payload);
      state.splice(idx, 1);
    },
  },
});

// console.log(contactsSlice);
export const contactReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

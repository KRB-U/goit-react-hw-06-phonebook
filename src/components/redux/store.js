import { devToolsEnhancer } from '@redux-devtools/extension';
import contactsData from 'jsonData/contactsData.json';
import { combineReducers, createStore } from 'redux';

const contactInitialState = {
  contacts: [...contactsData],
};

const contactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

const filterInitialState = {
  filter: '',
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilterValue':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

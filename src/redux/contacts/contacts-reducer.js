import { combineReducers } from 'redux';
import types from './contacts-type';

const items = (state = '', { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return items =>
        items.filter(item =>
          item.name.toLowerCase().includes(payload.toLowerCase()),
        );
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});

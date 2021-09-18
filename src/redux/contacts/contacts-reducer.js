import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './contacts-type';

const items = createReducer([], {
  [types.ADD]: (state, { payload }) => {
    const contactCheck = state.find(({ name }) => name === payload.name);
    if (contactCheck !== undefined) {
      alert(`${payload.name} is already in contact`);
      return;
    }

    return [...state, payload];
  },
  [types.DELETE]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [types.FILTER]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });

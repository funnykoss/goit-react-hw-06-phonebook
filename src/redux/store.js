import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
export default store;

// import { combineReducers } from 'redux';
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools());
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

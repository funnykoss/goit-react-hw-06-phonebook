import shortid from 'shortid';
import types from './contacts-type';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction(types.ADD, (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction(types.DELETE);
const contactCheck = createAction(types.FILTER);

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, contactCheck };
// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });
// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });
// const contactCheck = value => ({
//   type: types.FILTER,
//   payload: value,
// });

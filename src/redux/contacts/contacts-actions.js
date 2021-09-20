import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction('contacts/delete');
const contactCheck = createAction('contacts/filter');

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

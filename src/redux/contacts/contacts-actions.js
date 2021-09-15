import shortid from 'shortid';
import types from './contacts-type';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});
const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});
const contactCheck = name => ({
  type: types.FILTER,
  payload: name,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, contactCheck };

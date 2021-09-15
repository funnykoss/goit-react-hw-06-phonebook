import React from 'react';
import s from '../ContactList/ContactsList.module.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions'

const ContactList = ({ contacts, onDeleteContact  }) => {
  return (
    <ul>
      {
        contacts.map(({id, name, number}) =>(
          <li className={s.item} key={id}>
            {name} : {number}
            <button className={s.button}
              type='button'
              onClick={() => onDeleteContact(id)} >
           
            Delete
            </button>
          </li>
        ))
      }
   </ul>
  )
}
// const getVisibleContacts = (contacts, filter) => {
//     const normalizeContacts = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//         name.toLowerCase().includes(normalizeContacts)
//     );
// };

const mapStateToProps = (state) => {
    const { filter, items} = state.contacts;
     const normalizeContacts = filter.toLowerCase();
    const visibleContacts =  items.filter(({ name }) =>
       name.toLowerCase().includes(normalizeContacts)
    );

    return {
        contacts: visibleContacts
    };
    
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)


ContactList.prototype = {
  contacts: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
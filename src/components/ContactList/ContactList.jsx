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
const mapStateToProps = (state) => ({
    contacts: state.contacts.items
})

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps )(ContactList)


ContactList.prototype = {
  contacts: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
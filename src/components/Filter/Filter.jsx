import React from 'react';
import shortid from 'shortid';
import s from '../Filter/Filter.module.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions'


 const Filter = ({ value, onChange })=> {
    return (
        <label className={s.label}
            htmlFor={shortid.generate()}>
            Find contact by name
            <input className={s.input}
                name="filter"
                type='text'
                value={value}
                onChange={onChange}/>
        </label>
    )
}

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.contactCheck(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.prototype = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
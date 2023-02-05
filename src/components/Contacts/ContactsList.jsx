import React from 'react';

import { ContactItem, ContactBtn } from './ContactsList.styled';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import {deleteContacts} from "../../redux/contacts/thunk"
import {getVisibleContacts} from "../../redux/contacts/selectors"


export const ContactsList = () => {
  const filteredContacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
 
  return (
  <ul>
    {filteredContacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <p>{name}: {number}{' '}</p>
        <ContactBtn onClick={() => dispatch(deleteContacts(id))}>delete</ContactBtn>
      </ContactItem>
    )
    )}
    </ul>
  )
}




    

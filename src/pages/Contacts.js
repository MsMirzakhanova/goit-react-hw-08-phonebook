import { Helmet } from 'react-helmet';

import { Container } from '../components/App.styled';
import { PhonebookForm } from '../components/Phonebook/PhonebookForm';
import { ContactsList } from '../components/Contacts/ContactsList';
import { Filter } from '../components/Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsAsyncThunk } from '../redux/contacts/thunk';
import { selectIsLoading } from '../redux/contacts/selectors';

export function Contacts() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(contactsAsyncThunk());
  }, [dispatch]);

    return (
      <Container>
        <Helmet>
          <h1>Phonebook</h1>
          </Helmet>
        <PhonebookForm/>
        <h2>Contacts</h2>
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactsList/>
        </Container>
    );
    }
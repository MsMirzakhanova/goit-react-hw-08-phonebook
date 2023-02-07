import { Helmet } from 'react-helmet';

import { Container } from '../components/App.styled';
import { PhonebookForm } from '../components/Phonebook/PhonebookForm';
import { ContactsList } from '../components/Contacts/ContactsList';
import { Filter } from '../components/Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsAsyncThunk } from '../redux/contacts/thunk';
import { selectIsLoading } from '../redux/contacts/selectors';

const Contacts = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(contactsAsyncThunk());
  }, [dispatch]);

    return (
      <Container>
        <Helmet>
          <title>Phonebook</title>
          </Helmet>
        <PhonebookForm/>
        <h2>Contacts</h2>
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactsList/>
        </Container>
    );
}
    
export default Contacts;
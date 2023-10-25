
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const ContactList = () => {
  const phonebooks = useSelector(getContact);
  const filtered = useSelector(getFilter);
  const dispatch = useDispatch();

  
   


    const lowerCase = filtered.toLowerCase();
    const filteredContacts = phonebooks.filter(phonebook =>
        (phonebook.name.toLowerCase().includes(lowerCase)));
  
    const deletedContact = (contactId) => {
        dispatch(deleteContact(contactId))
    };
    

    return (
      <ul>
        {filteredContacts.map(({name, number, id})=> (
          <li key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button
            type="button"
            
            onClick={() => deletedContact(id)}
          >
            Delete
          </button>
        </li>
        ))}
      </ul>
    );
  }

    



export default ContactList;
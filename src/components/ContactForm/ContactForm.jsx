import { useState } from "react";
import style from "./ContactForm.module.css";
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContact } from "redux/contactsSlice";

export const ContactForm = () => {
    const phonebooks = useSelector(getContact);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const data = { name, number };
        const newContact = { ...data, id: nanoid() };
        

        
      
          if (existingContact(phonebooks, newContact) !== undefined) {
            alert(`${name} is already in contacts`);
            return;
          }
        
          dispatch(addContact(newContact));

        setName('');
        setNumber('');
    }

        const existingContact = (phonebooks, newContact) => {
            return phonebooks.find(phonebook => phonebook.name.toLowerCase() === newContact.name.toLowerCase());
        } 


        const onChangeInput = (event) => {
            const { name, value } = event.currentTarget;
            switch (name) {
                case 'name':
                    setName(value);
                    break;
                case 'number':
                    setNumber(value);
                    break;
            
                default:
                    break;
            };
        };
    // const handleInputChangeName = event => {
    //     setName(event.target.value);  
    // }
    //  const handleInputChangeNumber = event => {
    //     setNumber(event.target.value);
        
    // }


    // const handleSubmit = event => {
    //     event.preventDefault();
    //     onSubmit(name, number);
    // //    onSubmit(name, number)={onSubmit};
    //     setName('');
    //     setNumber('');
       
    // }

    
        return (
            <div className={style['contact-container']}>
            <form onSubmit={handleSubmit}> 
                <h2>Name</h2>
                <label>
                    <input onChange={onChangeInput} value={name} type="text" name="name" required />
                </label>
            
        <h2>Number</h2>
                <label>
                   <input onChange={onChangeInput} value={number} type="tel" name="number" required /> 
            </label>
            
        <button type="submit">Add conact</button>
            </form>
        
        </div>
        )
    
}

export default ContactForm;
import React,{  useState,useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  
  const AddContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts,{id:uuidv4(), ...contact}])
  }
  
  
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
        setContacts(retriveContacts);
    }
}, []);

  const removeContactHandler=(id)=>{
    const newContact=contacts.filter((contact)=>{
      return contact.id!==id
    });
    setContacts(newContact)
  }

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    console.log('Saving contacts to localStorage:', contacts);
  },[contacts]);
    
  
  return ( 
    <div className='uid container'>
      <Header/>
      <AddContact AddContactHandler={AddContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
   );
}


export default App

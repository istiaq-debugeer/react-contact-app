import React,{  useState,useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/contactDitals';
import api from './api/contacts';
import EditContact from './components/EditContacts';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  
  //Retrive contacts form json server

  const retriveContacts= async ()=>{
    const response=await api.get("/contacts");
    console.log('Fetched contacts:', response);
    return response.data;
  };
  const AddContactHandler=async (contact)=>{
    
    const data = { id: uuidv4(), ...contact };

    const request={
      id:uuidv4(),
      ...contact
    }
    const response=await api.post("/contacts",request)
    // const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [];

    setContacts((prev) => [...prev, response.data]);
   
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...retriveContacts, data]));
  }
  useEffect(()=>{

    const getAllContacts=async()=>{
      const allContacts=await retriveContacts();
      console.log(allContacts)
      if (allContacts){
        setContacts(allContacts)
      };
     
    }
    getAllContacts();

  },[]);
   
  
//   useEffect(() => {
//     const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (retriveContacts) {
//       setContacts(retriveContacts ?? []);
//     }
// }, []);

  const removeContactHandler= async (id)=>{
    await api.delete(`/contacts/${id}`);
    const newContact=  contacts.filter((contact)=>{
      return contact.id!==id
    });
    setContacts(newContact)
  }
  const updatecontactHandler=async(contact)=>{
      const response=await api.put(`/contacts/${contact.id}`,contact)
      console.log(response)
      const {id,name,email}=response.data;
      setContacts(contacts.map(contact=>{
        return contact.id===id?{...response.data}:contact;

      }));
  }

  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  //   console.log('Saving contacts to localStorage:', contacts);
  // },[contacts]);
    
  
  return ( 
    <div className='uid container'>
     <Router>
        <Header/>
      <Routes>
          <Route path="/"  element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
          <Route path="/add" element={<AddContact AddContactHandler={AddContactHandler}/>}/>
          <Route path="/edit" element={<EditContact updatecontactHandler={updatecontactHandler}/>}/>
          <Route path="/contact/:id" element={<ContactDetails/>}/>
      </Routes>
     
      {/* <AddContact AddContactHandler={AddContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
     </Router>
     
    </div>
   );
}


export default App

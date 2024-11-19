import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CardContact from './ContactCard';
const ContactList=(props)=>{
    console.log(props)
    const deleteContactHandler=(id)=>{
        props.getContactId(id); 
    }
   
    // const contacts=[{
    //     is:"1",
    //     name:"istiaq",
    //     email:"istiaq@gmail.com"
    // }
    // ];
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <CardContact  contact={contact} clickHandler={deleteContactHandler}
            key={contact.id}/>
        );
    }); 
    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add">
            <button className='ui button blue right'>Add Contact</button>
            </Link>
           
            <div className='ui called list'>
                {renderContactList}
            </div>
        </div>
    
    )
}

export default ContactList;
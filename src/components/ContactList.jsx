import React, { Component } from 'react';
import CardContact from './ContactCard';
const ContactList=(props)=>{
    console.log(props)
    const deleteContactHandler=(id)=>{
        props.getContactId(id); 
    }
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <CardContact  contact={contact} clickHandler={deleteContactHandler}
            key={contact.id}/>
        );
    }); 
    return (
    <div className='ui called list'>Contact List
        {renderContactList}
    </div>
    )
}

export default ContactList;
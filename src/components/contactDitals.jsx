import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';


const ContactDetails=()=>{
    
    const location = useLocation(); // Get location object using the hook
    const navigate = useNavigate(); // For navigation

    const contact = location.state?.contact;

    if (!contact) {
        return <div>No contact data found!</div>;
    }
    const { name, email } = contact;
    
    if (!contact) {
        return <div>Contact not found!
        
        <button className='ui button'  onClick={() => navigate('/')}>Back To Contact List</button></div>;
             
    }
    return (
        <div className='main'>
             <div className='ui card centered'>
                 <div className='image'>

                 </div>
                 <div className='content'>
                     <div className='header'>{name}</div>
                     <div className='description'>{email}</div>
                 </div>
             </div>
             <div className='center-div'>
                 <button className='ui button'  onClick={() => navigate('/')}>Back To Contact List</button>
             </div>
        </div>    
    )

}
export default ContactDetails; 

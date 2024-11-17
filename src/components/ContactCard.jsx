import React, { Component } from 'react';

function CardContact (props) {
    const {id,name,email}=props.contact
    return ( 
        <div className='item'>
            <div className='content'>
                <div className='header'>
                   {name} 
                </div>
                <div>{email}</div>
            </div>
            <i className='trash alternate outline icon'
             style={{color:"red",marginTop:"0px"}} 
            onClick={()=>props.clickHandler(id)} 
            >
               
            </i>
        </div>
    );
}

export default CardContact ;
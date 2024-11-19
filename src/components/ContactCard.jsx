import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function CardContact (props) {
    const {id,name,email}=props.contact
    return ( 
        <div className='item'>
            <div className='content'>
            <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                    <div className='header'>
                        {name} 
                    </div>
                    <div>{email}</div>
               </Link> 
                
            </div>
            <i className='trash alternate outline icon'
             style={{color:"red",marginTop:"7px"}} 
            onClick={()=>props.clickHandler(id)} 
            > </i>
            <Link> 
                <i className='edit alternate outline icon'
                style={{color:"green",marginTop:"7px",marginLeft:"10px"}} 
                onClick={()=>props.clickHandler(id)} 
                > </i> 
            </Link>            
               
           
        </div> 
    );
}

export default CardContact ;
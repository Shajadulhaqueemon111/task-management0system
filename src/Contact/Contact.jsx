import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';

const Contact = () => {
    const [contacts,setContacts]=useState([])

    useEffect(()=>{

        fetch('/contacts.json')

        .then(res=>res.json())
        .then(data=>setContacts(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-500 text-center mt-3 mb-4'>Contact Information</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    contacts.map(contact=><ContactCard key={contact._id} contact={contact}></ContactCard>)
                }
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';

const Contact = ({ contact, onDelete }) => {
  return (
    <div>
      <p>
        {contact.name} - {contact.number}
      </p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;

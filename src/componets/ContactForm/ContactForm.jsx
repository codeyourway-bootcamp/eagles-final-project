import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = () => {
    if (name && phone) {
      const newContact = { id: uuidv4(), name, phone };
      setContacts([...contacts, newContact]);
      setName('');
      setPhone('');
    }
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>

      <form>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="button" onClick={handleAddContact}>
          Adicionar Contato
        </button>
      </form>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button type="button" onClick={() => handleDeleteContact(contact.id)}>
              Excluir Contato
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactForm;
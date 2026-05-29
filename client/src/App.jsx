import React, { useEffect, useState } from "react";
import API from "./api";
import "./App.css";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const fetchContacts = async () => {
    const res = await API.get("/");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (data) => {
    await API.post("/", data);
    fetchContacts();
  };

  const deleteContact = async (id) => {
    await API.delete(`/${id}`);
    fetchContacts();
  };

  const updateContact = async (data) => {
    await API.put(`/${editContact._id}`, data);
    setEditContact(null);
    fetchContacts();
  };

  return (
    <div className="app-shell">
      <div className="app-card">
        <section className="panel panel-form">
          <div className="panel-header">
            <h1>Add Contact</h1>
          </div>
          <ContactForm
            onSubmit={editContact ? updateContact : addContact}
            existing={editContact}
          />
        </section>

        <section className="panel panel-list">
          <div className="panel-header">
            <h1>All Contacts</h1>
          </div>
          <ContactList
            contacts={contacts}
            onDelete={deleteContact}
            onEdit={setEditContact}
          />
        </section>
      </div>
    </div>
  );
};

export default App;

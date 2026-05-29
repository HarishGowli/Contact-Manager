import React, { useEffect, useState } from "react";

const ContactForm = ({ onSubmit, existing }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (existing) {
      setName(existing.name || "");
      setPhone(existing.phone || "");
      setEmail(existing.email || "");
    }
  }, [existing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone, email });
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          required
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="text"
          value={phone}
          required
          placeholder="Enter Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          required
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">{existing ? "Update" : "Add"}</button>
    </form>
  );
};

export default ContactForm;

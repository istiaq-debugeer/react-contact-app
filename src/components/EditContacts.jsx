import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ updatecontactHandler }) => {
  const location = useLocation(); // Access state passed via Link
  const navigate = useNavigate();

  // Initialize state with the existing contact details
  const [state, setState] = useState({ name: "", email: "" });

  useEffect(() => {
    if (location.state && location.state.contact) {
      const { name, email } = location.state.contact;
      setState({ name, email });
    }
  }, [location.state]);

  const update = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    updatecontactHandler(state);
    setState({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Edit</button>
      </form>
    </div>
  );
};

export default EditContact;

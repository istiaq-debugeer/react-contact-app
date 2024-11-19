import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ AddContactHandler }) => {
    const [state, setState] = useState({ name: "", email: "" });
    const navigate = useNavigate(); // React Router v6 navigation hook

    const add = (e) => {
        e.preventDefault();
        if (state.name === "" || state.email === "") {
            alert("All fields are required");
            return;
        }
        AddContactHandler(state);
        setState({ name: "", email: "" });
        navigate("/"); // Navigate to the home page
    };

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
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
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
};

export default AddContact;

import React, { useState } from "react";
import type { User } from "./types/User";

interface UserFormProps {
  onAddUser: (user: Omit<User, "id">) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Invalid email address. Please enter correct email.");
      return;
    }

    setError("");
    onAddUser({ name, email });
    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='fieldset'>
        <label className='label'>name:</label>
        <input
          data-testid='name'
          type='text'
          className='input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='fieldset'>
        <label className='label'>email:</label>
        <input
          data-testid='email'
          type='text'
          className={`input ${error && "border-error text-error"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className='text-xs text-error'>{error}</p>}
      </div>
      <button className=' btn btn-primary mt-4' disabled={!name || !email}>
        Submit
      </button>
    </form>
  );
};

export default UserForm;

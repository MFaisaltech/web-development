import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload
    alert(`Submitted!\nUsername: ${form.username}\nEmail: ${form.email}`);
  }

  function clearForm() {
    setForm({
      username: "",
      password: "",
      email: ""
    });
  }

  return (
    <div>
      <h1>Signup Form</h1>

      {/* wrapping inside form for proper behavior */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="Enter your name"
          value={form.username}
          onChange={handleChange}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />
        <br />

        <input 
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>
        <button type="button" onClick={clearForm}>Clear Form</button>
      </form>

      <h2>Preview</h2>
      <h3>Username: {form.username}</h3>
      <h3>Password: {form.password}</h3>
      <h3>Email: {form.email}</h3>
    </div>
  );
}

export default Form;

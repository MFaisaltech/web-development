import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  // Generic input handler
  let handleInputChange = (event) => {
    let { name, value } = event.target;

    setFormData((currData) => {
      return {
        ...currData,
        [name]: value, // dynamically update field
      };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted: ", formData);

    // reset form
    setFormData({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname">Full Name</label>
        <input
          placeholder="Enter your full name"
          type="text"
          id="fullname"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />

        <label htmlFor="username">Username</label>
        <input
          placeholder="Enter username"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <button type="submit">Submit!</button>
      </div>
    </form>
  );
}

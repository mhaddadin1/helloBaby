import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        babyName: formState.babyName,
        parentName: formState.parentName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className="tac">
        <h1>Peace of mind made simple</h1>
        <h2>Keep track of your baby feedings</h2>
        <h3>Sign up or Login below to get started</h3>
      </div>
      <div className="card1 my-3 ">
        <Link to="/login">← Go to Login</Link>

        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="my-top">
            <label htmlFor="email">Email Address:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>

          <div className="my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>

          <div className="  my-2">
            <label htmlFor="parentName">Parent Name:</label>
            <input
              placeholder="Parent Name"
              name="parentName"
              type="parentName"
              id="parentName"
              onChange={handleChange}
            />
          </div>
          <div className="  my-2">
            <label htmlFor="babyName">Baby Name:</label>
            <input
              placeholder="Baby Name"
              name="babyName"
              type="babyName"
              id="babyName"
              onChange={handleChange}
            />
          </div>

          <div className="flex-center my-bot">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;

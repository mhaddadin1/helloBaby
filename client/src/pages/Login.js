import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      {/* <Menu></Menu> */}
      <div className="tac">
        <h1>Peace of mind made simple</h1>
        <h2>Keep track of your baby feedings</h2>
        <h3>Sign up or Login below to get started</h3>
      </div>

      <div className="card1 my-3">
        <Link to="/signup">← Go to Signup</Link>

        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="my-top">
            <label htmlFor="email">Email Address:</label>
            <input
              // className=" d-f j-c"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className=" my-2 ">
            <label htmlFor="pwd">Password:</label>
            <input
              // className=" d-f j-c"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div className="flex-center my-bot">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

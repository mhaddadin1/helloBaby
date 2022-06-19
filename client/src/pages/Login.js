import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import styled from "styled-components";
import { BoldLink } from "../components/AccountBox/common";
import Signup from "./Signup";
import Button from "../components/Button/Button";
import { AccountContainer } from "./Signup";
import Logo from "../img/graveworld-logo-real.png";

const BoxContainer = styled.div`
  width: 280px;
  // min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;
const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
`;

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: -235px;
  left: -70px;
  background: rgb(36, 123, 123);
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 35px;
  font-weight: 650;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: white;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

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
      <div>
        <header className="d-flex m-regular stack j-center">
          <img
            className="miw-100@sml w-15"
            src={Logo}
            path="/"
            alt="Graveworld Logo"
          ></img>
        </header>
      </div>

      <div className="mt-6"></div>
      <AccountContainer>
        <BoxContainer>
          <TopContainer>
            <BackDrop />{" "}
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>

              <div className="container my-1">
                <SmallText>Login</SmallText>
                <form onSubmit={handleFormSubmit}>
                  <div className="flex-row space-between my-2">
                    <label className="has-text-white" htmlFor="email">
                      Email address:
                    </label>
                    <input
                      placeholder="youremail@test.com"
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-row space-between my-2">
                    <label className="has-text-white" htmlFor="pwd">
                      Password:
                    </label>
                    <input
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
                  <div className="flex-row flex-end">
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
                <BoldLink href="/signup" onClick={Signup}>
                  Signup
                </BoldLink>
                <div></div>
              </div>
            </HeaderContainer>
          </TopContainer>
        </BoxContainer>
      </AccountContainer>
    </>
  );
}

export default Login;

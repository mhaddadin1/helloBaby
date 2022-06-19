import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { BoldLink } from "../components/AccountBox/common";

import styled from "styled-components";
import Button from "../components/Button/Button";
import char1 from "../assets/images/sprites/char1.png";
import char2 from "../assets/images/sprites/char2.png";
import char3 from "../assets/images/sprites/char3.png";
import char4 from "../assets/images/sprites/char4.png";
import Login from "./Login";
import Logo from "../img/graveworld-logo-real.png";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
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
  // padding-bottom: 5em;
`;

export const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  // border-radius: 50%;
  // transform: rotate(60deg);
  top: -293px;
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
    // margin: 0;
    margin-top: 7px:
`;

export const AccountContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5em;
`;

function Signup(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    heroName: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        heroName: formState.heroName,
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

  const saveAvatar = (id) => {
    localStorage.setItem("charAv", id);
  };

  return (
    <>
      <header className="d-flex m-regular stack j-center">
        <img className="miw-100@sml w-15" src={Logo} path="/" alt="Graveworld Logo"></img>
      </header>
      <div className="mt-6"></div>
      <AccountContainer>
        <BoxContainer>
          <TopContainer>
            <BackDrop />{" "}
            <HeaderContainer>
              <HeaderText>Sign Up</HeaderText>

              <div className=" container my-1">
                <form onSubmit={handleFormSubmit}>
                  <div className="flex-row space-between my-2">
                    <label className="has-text-white" htmlFor="email">
                      Email:
                    </label>
                    <input placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleChange} />
                  </div>
                  <div className="flex-row space-between my-2">
                    <label className="has-text-white" htmlFor="pwd">
                      Password:
                    </label>
                    <input placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
                  </div>
                  <div className="flex-row space-between my-2">
                    <label className="has-text-white" htmlFor="pwd">
                      Hero Name:
                    </label>
                    <input placeholder="******" name="heroName" type="text" id="heroName" onChange={handleChange} />
                  </div>
                  <div className="has-text-white">
                    Choose an Avatar
                    <div className="columns is-mobile">
                      <img onClick={() => saveAvatar(1)} className="column is-6 chooseMe" src={char1} alt="" tabIndex="0" />
                      <img onClick={() => saveAvatar(2)} className="column is-6 chooseMe" src={char2} alt="" tabIndex="0" />
                    </div>
                    <div className="columns is-mobile">
                      <img onClick={() => saveAvatar(3)} className="column is-6 chooseMe" src={char3} alt="" tabIndex="0" />
                      <img onClick={() => saveAvatar(4)} className="column is-6 chooseMe" src={char4} alt="" tabIndex="0" />
                    </div>
                  </div>
                  <div className="flex-row flex-end">
                    <Button>Submit</Button>
                  </div>
                </form>
                <BoldLink href="/login" onClick={Login}>
                  Login
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

export default Signup;

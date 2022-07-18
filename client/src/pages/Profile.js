import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

// components

// import Button from "../components/Button/Button";
import { QUERY_USER } from "../utils/queries";

const Profile = () => {
  const [earnedTk, setEarnedTk] = useState([]);
  const { loading, data } = useQuery(QUERY_USER);

  useEffect(() => {});

  useEffect(() => {
    const tokenArray = JSON.parse(localStorage.getItem("tokens"));
    setEarnedTk(tokenArray);
  }, []);

  return (
    <>
      <main className="center">Profile</main>
    </>
  );
};

export default Profile;

import React, { useEffect } from "react";
// import { useQuery } from "@apollo/client";

// components

// import Button from "../components/Button/Button";
// import { QUERY_USER } from "../utils/queries";
import TotalFeeding from "../components/TotalFeeding";
import TodayFeeding from "../components/TodayFeeding";

const Profile = () => {
  // const [earnedTk, setEarnedTk] = useState([]);
  // const { loading, data } = useQuery(QUERY_USER);

  useEffect(() => {});

  // useEffect(() => {
  //   const tokenArray = JSON.parse(localStorage.getItem("tokens"));
  //   setEarnedTk(tokenArray);
  // }, []);

  return (
    <>
      <main className="center">Profile</main>
      <TodayFeeding />
      <TotalFeeding />
    </>
  );
};

export default Profile;

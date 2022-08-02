import React, { useEffect } from "react";
// import { useQuery } from "@apollo/client";

// components

// import Button from "../components/Button/Button";
// import { QUERY_USER } from "../utils/queries";
// import TotalFeeding from "../components/TotalFeeding";
import TodayFeeding from "../components/TodayFeeding";
import WeeklyFeeding from "../components/WeeklyFeeding";
import MonthlyFeeding from "../components/MonthlyFeeding";

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
      <br />
      <div className="card1">
        <TodayFeeding />
      </div>
      <br />
      <div className="card1">
        <WeeklyFeeding />
      </div>
      <br />
      <div className="card1">
        <MonthlyFeeding />
      </div>
      <br />
      {/* <div className="card1">
        <TotalFeeding />
      </div> */}
    </>
  );
};

export default Profile;

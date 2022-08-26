import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

// components

// import Button from "../components/Button/Button";
import { QUERY_USER } from "../utils/queries";
import TotalFeeding from "../components/TotalFeeding";
import TodayFeeding from "../components/TodayFeeding";
// import WeeklyFeeding from "../components/WeeklyFeeding";
// import MonthlyFeeding from "../components/MonthlyFeeding";

const Profile = () => {
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }

  useEffect(() => {});

  return (
    <>
      <div className="tac">
        {user ? (
          <>
            <h1>
              Welcome {user.parentName}! Here is a summary of {user.babyName}'s
              feedings
            </h1>
          </>
        ) : null}
      </div>
      <br />
      <div className="card1">
        <TodayFeeding />
      </div>
      <br />

      <div className="card1">
        <TotalFeeding />
      </div>
    </>
  );
};

export default Profile;

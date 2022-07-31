// import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function WeeklyFeeding() {
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }
  return (
    <div>
      {user ? (
        <>
          <h2>last 7 days avg: {user.feeding_stats.weeklyAmount} Ounces</h2>
        </>
      ) : null}
    </div>
  );
}

export default WeeklyFeeding;

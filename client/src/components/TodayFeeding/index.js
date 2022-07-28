// import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function TodayFeeding() {
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }
  return (
    <div>
      {user ? (
        <>
          <h2>Todays total: {user.feeding_stats.todayAmount}</h2>
        </>
      ) : null}
    </div>
  );
}

export default TodayFeeding;

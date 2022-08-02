// import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function MonthlyFeeding() {
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }
  return (
    <div>
      {user ? (
        <>
          <h2>30 day daily avg: {user.feeding_stats.monthlyAmount} Ounces</h2>
        </>
      ) : null}
    </div>
  );
}

export default MonthlyFeeding;

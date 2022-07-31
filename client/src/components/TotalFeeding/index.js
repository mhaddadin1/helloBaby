// import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function TotalFeeding() {
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }
  return (
    <div>
      {user ? (
        <>
          <h2>Total feeding: {user.feeding_stats.totalAmount}</h2>
        </>
      ) : null}
    </div>
  );
}

export default TotalFeeding;
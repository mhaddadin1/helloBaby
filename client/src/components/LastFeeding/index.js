// import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function LastFeeding() {
  const { loading, data } = useQuery(QUERY_USER);

  const feedingArr = data?.user.feedings.slice(-1);

  //   let user;
  //   if (data) {
  //     user = data.user;
  //   }

  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div>
          <h2>Last Feeding for {data.user.babyName}</h2>
          <h3>amount: {feedingArr.amount}</h3>
        </div>
      )}
    </div>
  );
}

export default LastFeeding;

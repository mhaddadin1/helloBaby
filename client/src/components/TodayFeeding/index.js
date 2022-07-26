// import { useEffect, useState } from "react";
// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../../utils/queries";

// function TodayFeeding() {
//   const { loading, data } = useQuery(QUERY_USER);
//   const [userFeeding, setUserFeeding] = useState([]);

//   useEffect(() => {
//     const feedingArr = data?.user.feedings.map((amount) => {
//       return {
//         amount: amount,
//       };
//     });
//     console.log(feedingArr);
//     setUserFeeding(feedingArr);
//   }, [data?.user.feedings]);

//   return <div>{loading ? <div>loading</div> : <h2>{userFeeding}</h2>}</div>;
// }

// export default TodayFeeding;

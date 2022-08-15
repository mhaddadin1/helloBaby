// // import { useEffect, useState } from "react";

// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../../utils/queries";

// function LastFeeding() {
//   const { data } = useQuery(QUERY_USER);

//   // const feedingArr = data?.user.feedings.length - 1;

//   let user;
//   if (data) {
//     user = data.user;
//   }

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h2>Todays Feedings for {data.user.babyName}</h2>
//           {user.feedings.map((feeding) => (
//             <h3 key={feeding._id}>amount: {feeding.amount}</h3>
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default LastFeeding;

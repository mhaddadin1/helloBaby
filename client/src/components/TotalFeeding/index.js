import img from "../../assets/images/feedingchart.jpeg";
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
          <h2>Avg Feeding: {user.feeding_stats.totalAmount} Ounces</h2>
        </>
      ) : null}

      <img src={img}></img>
    </div>
  );
}

export default TotalFeeding;

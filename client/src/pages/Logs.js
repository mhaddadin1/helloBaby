import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FEEDING } from "../utils/mutations";
// import Auth from "../utils/auth";
// import { QUERY_USER } from "../utils/queries";

function Logs() {
  // const { loading, data } = useQuery(QUERY_USER);
  const [addFeeding] = useMutation(ADD_FEEDING);
  const [formState, setFormState] = useState(0);

  // const [formState, setformState] = useState(0);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addFeeding({
      variables: {
        amount: parseInt(formState.amount),
      },
    });
    // const feedings = mutation.data.addFeeding.feedings;
    // return feedings;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      {/* <NavBar></NavBar> */}
      <div className="card1 my-3">
        <h2>Logs</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="my-top">
            <label htmlFor="amount">amount:</label>
            <input
              placeholder="amount (ounces)"
              name="amount"
              type="number"
              id="amount"
              onChange={handleChange}
            />
          </div>

          <div className="flex-center my-bot">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Logs;

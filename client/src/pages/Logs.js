import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FEEDING } from "../utils/mutations";
import TodayFeeding from "../components/TodayFeeding";
// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../utils/queries";
// import LastFeeding from "../components/LastFeeding";

// import Auth from "../utils/auth";

function Logs() {
  const [addFeeding] = useMutation(ADD_FEEDING);

  const [formState, setFormState] = useState();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addFeeding({
      variables: {
        amount: parseInt(formState.amount),
      },
    });
    window.location.reload(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="card1 my-3">
      <h2>Feeding Log</h2>
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

        <div className="flex-center my-bot my-3">
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* <LastFeeding /> */}
      <TodayFeeding />
    </div>
  );
}

export default Logs;

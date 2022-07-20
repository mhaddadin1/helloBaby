import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FEEDING } from "../utils/mutations";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

import Auth from "../utils/auth";

function Logs() {
  const [addFeeding] = useMutation(ADD_FEEDING);

  const [formState, setFormState] = useState(0);

  const [userFeeding, setUserFeeding] = useState([]);

  const { loading, data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addFeeding({
      variables: {
        amount: parseInt(formState.amount),
      },
    });
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
          <label htmlFor="amount">amount </label>
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

      {user ? (
        <div>
          <h2>Todays Log for {user.babyName}</h2>
        </div>
      ) : null}
    </div>
  );
}

export default Logs;

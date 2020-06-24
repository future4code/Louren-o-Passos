import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function TripDetailPage() {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null ) {
      history.push("/login")
    };

  }, [history]);



 
  return (
    <div>
      <p>TripDetailPage</p>
    </div>
  );
}

export default TripDetailPage;

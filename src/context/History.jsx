import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div>
      <Link to="/">
        {" "}
        <button> Back TodoList </button>
      </Link>
    </div>
  );
};

export default History;

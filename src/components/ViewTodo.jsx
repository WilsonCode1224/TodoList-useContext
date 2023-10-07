import React from "react";
import { useContext } from "react";
import { DataContext } from "./InputData";

const ViewTodo = ({ onCheckboxChange }) => {
  const Todos = useContext(DataContext);
  return (
    <>
      <div className="viewTodo">
        <h2>View Todos</h2>
        <ul>
          {Todos.map((item, index) => (
            <li key={index} className={item.checked ? "delete" : ""}>
              <input
                onChange={() => onCheckboxChange(index)}
                checked={item.checked}
                type="checkbox"
              />
              {item.list}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ViewTodo;

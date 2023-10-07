import React from "react";
import ViewTodo from "./ViewTodo";
import { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";

export const DataContext = createContext(null);

const InputData = () => {
  const [inputTodo, setInputTodo] = useState(""); // 輸入資料用的 State
  const [todos, setTodos] = useState([]); // 空陣列

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  // 新增
  const handleSubmit = (e) => {
    // 按下按鈕以後，展開陣列：
    setTodos([...todos, { list: inputTodo, checked: false }]);
    setInputTodo(""); // 輸入後清除
  };

  // checkbox 狀態確認：

  const onCheckboxChange = (index) => {
    const updateCheck = [...todos];
    updateCheck[index].checked = !updateCheck[index].checked;
    setTodos(updateCheck);
  };

  // 刪除已完成的工作：
  const handleDelete = () => {
    const deleteTodos = todos.filter((item) => !item.checked); // 當我的元素沒被勾選時(false) 被保留在陣列裡
    setTodos(deleteTodos);
  };

  useEffect(() => {
    console.log("使用者輸入了一筆新的資料", todos);
  }, [todos]); // 在 todos 改變時執行

  return (
    <>
      <h1>useContext TodoList Practice</h1>
      <DataContext.Provider value={todos}>
        <div className="inputData">
          <input
            className="input-todo"
            type="text"
            value={inputTodo}
            onChange={handleChange}
            placeholder="Enter your plan!"
          />
          <button className="addData" onClick={handleSubmit}>
            Add New Todos
          </button>
        </div>
        <ViewTodo onCheckboxChange={onCheckboxChange} />
      </DataContext.Provider>
      <Link to="/history">
        {" "}
        <button>Input Log</button>
      </Link>

      <button onClick={handleDelete} className="deleteAll">
        Delete completed work
      </button>
    </>
  );
};

export default InputData;

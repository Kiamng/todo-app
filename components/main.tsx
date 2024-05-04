"use client";

import { useState } from "react";
import { Input } from "./input";
import { List } from "./list";

const Main = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTask = () => {
    if (inputValue === "") {
      alert("The input value is required !");
    }
    setTodoList([inputValue, ...todoList]);
    setInputValue("");
  };

  const addInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const enterInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      addTask();
    }
  };

  const deleteTask = (index: number) => {
    const newTodoList = todoList.filter((value, i) => index !== i);
    setTodoList(newTodoList);
  };

  console.log("todo list", todoList);
  return (
    <div className="main h-screen flex justify-center items-center bg-[#ff8d8d] text-black">
      <div className="content">
        <div className="content__container relative px-5 w-[680px] bg-white min-h-[520px] rounded-xl">
          <div className="content__title pt-3 text-center">
            <h1 className="text-red-500">TODO APP</h1>
          </div>
          <Input
            inputValue={inputValue}
            enterInput={(e: React.KeyboardEvent<HTMLInputElement>) =>
              enterInput(e)
            }
            addInput={(e: React.ChangeEvent<HTMLInputElement>) => addInput(e)}
          />
          <div className="content__submit-button mt-4">
            <button
              onClick={addTask}
              className="submit-btn w-full h-10 font-bold text-lg bg-[#ff1d1d] text-white border-none rounded-lg hover:opacity-80"
            >
              Add task
            </button>
          </div>
          <List
            todoList={todoList}
            deleteTask={(index: number) => deleteTask(index)}
          />
          <div className="content__footer pr-5 pb-5 absolute text-xl bottom-0 right-0">
            You have {todoList.length} {todoList.length > 1 ? "tasks" : "task"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

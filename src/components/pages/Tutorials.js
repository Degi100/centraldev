import React, { useState } from "react";
import { AddUser } from "../tutorials/AddUser/AddUser";
import { Todoes } from "../pages/Todoes";
import "./tutorials.scss";

export const Tutorials = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showTodoApp, setShowTodoApp] = useState(false);

  return (
    <div>
      <div className="layer-headline">
        <h1>Tutorials</h1>
        <div className="tut-subnavi">
          {showAddUserForm && <AddUser />}
          <label onClick={() => setShowAddUserForm(!showAddUserForm)}>
            <span>Add User Form</span>
          
            </label>
          {showTodoApp && (
            <div>
              <Todoes />
            </div>
          )}
          <label onClick={() => setShowTodoApp(!showTodoApp)}><span>Todo App</span></label>
        </div>
      </div>
    </div>
  );
};

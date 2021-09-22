import React, { useState } from "react";
import { AddUser } from "../AddUser/AddUser";
import { Todoes } from "../pages/Todoes";
import "./tutorials.scss";

export const Tutorials = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showTodoApp, setShowTodoApp] = useState(false);

  return (
    <div>
      <div className="layer-headline">
        <h1>Tutorials</h1>
      </div>

      <div className="addUser">Add-User-Form</div>
      {showAddUserForm && (
        <div>
          <AddUser />
        </div>
      )}
      <button onClick={() => setShowAddUserForm(!showAddUserForm)}>Show</button>

      <div className="todos">todo-app</div>
      {showTodoApp && (
        <div>
          <Todoes />
        </div>
      ) }
      <button onClick={() => setShowTodoApp(!showTodoApp)}>Show</button>
    </div>
  );
};

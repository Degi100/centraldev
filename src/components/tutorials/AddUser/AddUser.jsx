import { React, useState, useRef, useEffect } from "react";
import "./adduser.scss";
import initialUsers from "../../../data/showcaseUsers.json";

export const AddUser = () => {
  const [users, setUsers] = useState(initialUsers);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState(""); //
  const firstNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
    const lsUsers = JSON.parse(localStorage.getItem("users"));
    if(lsUsers !== null) {
      setUsers(lsUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  },[users]);

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const addUser = () => {
    if (firstName !== "" && lastName !== "") { //
      setUsers((n) => [...n, { firstName, lastName }]);
      setFirstName("");
      setLastName("");
      firstNameRef.current.focus();
      firstNameRef.current.style.fontWeight = "bold"; //lastName
      setMessage("");
    } else {
      setMessage("Plese enter a first name and last name");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addUser();
    }
  };
  const handleAddUser = () => {
    addUser();
  };

  return (
    <div>
      <div className="layer-headline">
      </div>
      
      <div className="add-user">
      <h2> LiveCoding - 21.09.2021</h2>
      <table>
      <tbody>
      {users.map((user) => {
        return (
          <tr key={user.id}>
          <td>{user.firstName} </td>
          <td>{user.lastName}</td>
          <td></td>
          </tr>
          );
        })}
        <tr>
        <td>
        <input
        type="text"
        ref={firstNameRef}
        value={firstName}
        onChange={handleChangeFirstName}
        />
        </td>
        <td>
        <input
        type="text"
        value={lastName}
        onChange={handleChangeLastName}
        onKeyPress={handleKeyPress}
        />
        </td>
        <td>
        <label onClick={handleAddUser}>Add User</label>
        
        </td>
        </tr>
        </tbody>
        </table>
        {message !== "" && (
          <div className="message">{message}</div>
          )}
          </div>
          </div>
          );
        };
        
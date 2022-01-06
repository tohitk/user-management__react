import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  function formSumbitHandler(uName, uAge) {
    setUserList((prevState) => {
      return [
        { name: uName, age: uAge, id: Math.random().toString() },
        ...prevState,
      ];
    });
  }
  return (
    <div>
      <AddUser onAddUser={formSumbitHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;

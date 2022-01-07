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
    <React.Fragment>
      <AddUser onAddUser={formSumbitHandler} />
      <UsersList users={userList} />
    </React.Fragment>
  );
}

export default App;

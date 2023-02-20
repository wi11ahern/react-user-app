import NewUser from "./components/users/new-user";
import { User } from "./components/users/user-item";
import UserList from "./components/users/user-list";
import { useState } from "react";

const App = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const onAddNewUserHandler = (user: User) => {
    setUserList((prevState) => {
      return [...prevState, user];
    });
  };

  return (
    <div>
      <NewUser onAddNewUserHandler={onAddNewUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;

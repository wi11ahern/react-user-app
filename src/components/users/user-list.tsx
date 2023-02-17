import styles from "./user-list.module.css";
import Card from "../card/card";
import UserItem, { User } from "./user-item";

interface Props {
  users: User[];
}

const UserList = (props: Props) => {
  const userItems = props.users.map((user) => {
    return <UserItem key={user.id} user={user} />;
  });
  return <Card>{userItems}</Card>;
};

export default UserList;

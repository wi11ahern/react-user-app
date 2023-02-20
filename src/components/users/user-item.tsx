import Card from "../common-ui/card";
import styles from "./user-item.module.css";

export interface User {
  id: number;
  username: string;
  age: number;
}

interface Props {
  user: User;
}

const UserItem = (props: Props) => {
  return (
    <li className={styles["user-item"]}>
      {`${props.user.username} (${props.user.age} years old)`}
    </li>
  );
};

export default UserItem;

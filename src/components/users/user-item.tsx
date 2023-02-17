import Card from "../card/card";
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
    <Card className={styles["user-item"]}>
      <div>{`${props.user.username} (${props.user.age} years old)`}</div>
    </Card>
  );
};

export default UserItem;

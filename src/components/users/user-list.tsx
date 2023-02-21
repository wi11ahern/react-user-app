import UserItem, { User } from "./user-item";

import Card from "../common-ui/card";
import styles from "./user-list.module.css";

interface Props {
  users: User[];
}

const UserList = (props: Props) => {
  const userItems = props.users.map((user) => {
    return <UserItem key={user.id} user={user} />;
  });

  return (
    <>
      {userItems.length > 0 && (
        <Card className={styles.users}>
          <ul>{userItems}</ul>;
        </Card>
      )}
    </>
  );
};

export default UserList;

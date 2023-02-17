import UserForm, { UserFormData } from "./user-form";
import { User } from "./user-item";

interface Props {
  onAddNewUserHandler: Function;
}

const NewUser = (props: Props) => {
  const onNewUserHandler = (userFormData: UserFormData) => {
    const user: User = {
      ...userFormData,
      id: Math.random(),
    };
    console.log(user);
    props.onAddNewUserHandler(user);
  };

  return <UserForm onNewUserHandler={onNewUserHandler} />;
};

export default NewUser;

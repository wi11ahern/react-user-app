import { SyntheticEvent, useState } from "react";
import Warning from "../warning/warning";
import { User } from "./user-item";

export type UserFormData = Omit<User, "id">;

interface Props {
  onNewUserHandler: Function;
}

const UserForm = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");

  const usernameChangeHandler = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    setUsername(target.value);
  };

  const ageChangeHandler = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setAge(target.value);
  };

  const onOkayHandler = (event: SyntheticEvent) => {
    setValidationMessage("");
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    const ageNum: number = Number(age);
    let validationMessage = "";
    if (username.length === 0) {
      validationMessage += "You must enter a username!";
    }
    if (ageNum <= 0) {
      validationMessage += "\nAge cannot be less than 0!";
    }
    if (validationMessage) {
      setValidationMessage(validationMessage);
      return;
    }

    const userFormData: UserFormData = {
      username: username,
      age: ageNum,
    };
    props.onNewUserHandler(userFormData);
    setUsername("");
    setAge("");
  };

  return (
    <div>
      <Warning
        onOkayHandler={onOkayHandler}
        message={validationMessage}
        isValid={validationMessage ? false : true}
      />
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            onChange={usernameChangeHandler}
            value={username}
          />
        </div>
        <div>
          <label>Age</label>
          <input type="text" onChange={ageChangeHandler} value={age} />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

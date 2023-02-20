import { SyntheticEvent, useEffect, useRef, useState } from "react";

import Button from "../common-ui/button";
import Card from "../common-ui/card";
import ErrorModal from "../common-ui/error-modal";
import { User } from "./user-item";
import styles from "./user-form.module.css";

export type UserFormData = Omit<User, "id">;

interface Props {
  onNewUserHandler: Function;
}

const UserForm = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");
  const userNameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    /**
     * Sets the focus on whatever input element @userNameInput is assigned to as a 'ref'.
     * In this case, we always want to re-focus on the username input after a submit event.
     */
    if (userNameInput.current) userNameInput.current.focus();
  }, [username]);

  const usernameChangeHandler = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    setUsername(target.value);
  };

  const ageChangeHandler = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setAge(target.value);
  };

  const exitErrorModalHandler = (event: SyntheticEvent) => {
    setValidationMessage("");
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    let validationMessages: string[] = [];
    if (username.length === 0) {
      validationMessages.push("You must enter a username.");
    }
    const ageNum: number = Number(age);
    if (ageNum <= 0) {
      validationMessages.push("Age must be greater than 0.");
    }
    if (validationMessages.length > 0) {
      setValidationMessage(validationMessages.join(" "));
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
    <Card className={styles.input}>
      {validationMessage && (
        <ErrorModal
          title="Validation Warning"
          message={validationMessage}
          onClickHandler={exitErrorModalHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={username}
          ref={userNameInput}
        />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;

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
  const [validationMessage, setValidationMessage] = useState<string>("");
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    /**
     * Sets the focus on the 'Username' input after a user is added.
     * Note: This is safe in this app, but in more complex apps, it's better
     * to limit useEffect by dependencies to avoid unexpected behavior.
     */
    if (usernameInputRef.current) usernameInputRef.current.focus();
  });

  const exitErrorModalHandler = (event: SyntheticEvent) => {
    setValidationMessage("");
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    const enteredUsername: string = usernameInputRef.current!.value;
    const enteredAge: number = Number(ageInputRef.current!.value);
    let validationMessages: string[] = [];
    if (enteredUsername.length === 0) {
      validationMessages.push("You must enter a username.");
    }
    if (enteredAge <= 0) {
      validationMessages.push("Age must be greater than 0.");
    }
    if (validationMessages.length > 0) {
      setValidationMessage(validationMessages.join(" "));
      return;
    }

    const userFormData: UserFormData = {
      username: enteredUsername,
      age: enteredAge,
    };
    props.onNewUserHandler(userFormData);

    usernameInputRef.current!.value = "";
    ageInputRef.current!.value = "";
  };

  return (
    <>
      {validationMessage && (
        <ErrorModal
          title="Validation Warning"
          message={validationMessage}
          onClickHandler={exitErrorModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;

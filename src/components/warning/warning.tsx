import { MouseEventHandler } from "react";
import Card from "../card/card";
import styles from "./warning.module.css";

interface Props {
  isValid: boolean;
  message?: string;
  onOkayHandler: MouseEventHandler;
}

const Warning = (props: Props) => {
  return (
    <Card className={props.isValid ? styles.hide : styles.warning}>
      <div>{!props.message ? "Validation warning!" : props.message}</div>
      <button type="button" onClick={props.onOkayHandler}>
        Okay
      </button>
    </Card>
  );
};

export default Warning;

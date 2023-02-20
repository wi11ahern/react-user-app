import Button from "../common-ui/button";
import Card from "../common-ui/card";
import { MouseEventHandler } from "react";
import styles from "./error-modal.module.css";

interface Props {
  title: string;
  message: string;
  onClickHandler: MouseEventHandler;
}

const ErrorModal = (props: Props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClickHandler} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onClickHandler}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

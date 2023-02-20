import { ReactNode } from "react";
import styles from "./card.module.css";

interface Props {
  className: string;
  children?: ReactNode;
}

const Card = (props: Props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;

import Backdrop from "./backdrop";
import { MouseEventHandler } from "react";
import OverlayModal from "./overlay-modal";
import ReactDOM from "react-dom";

interface Props {
  title: string;
  message: string;
  onClickHandler: MouseEventHandler;
}

const ErrorModal = (props: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClickHandler={props.onClickHandler} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <OverlayModal {...props} />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default ErrorModal;

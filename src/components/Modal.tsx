import React from "react";
import "../styles/modal.css";

type Props = {
  link: string;
  closeModal: Function | any;
  modalOpen: boolean;
  modalData: object | string;
};

export default function Modal(props: Props) {
  const { closeModal, modalOpen, modalData } = props;

  let displayState = modalOpen ? "visible" : "hidden";

  let modalContent = "" as any;
  if (Array.isArray(modalData)) {
    modalContent = modalData.map((link) => {
      return (
        <img
          className={`modal-image ${displayState}`}
          src={`/artwork/${link}`}
          key={link}
        ></img>
      );
    });
  } else {
    modalContent = (
      <img
        className={`modal-image ${displayState}`}
        src={`/artwork/${modalData}`}
      ></img>
    );
  }

  return (
    <div className={`modal ${displayState}`} onClick={closeModal}>
      <div className="modal-image--container">
        {modalContent}
      </div>
      <button className="modal--close-button">×</button>
    </div>
  );
}

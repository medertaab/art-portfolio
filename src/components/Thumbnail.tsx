import React from "react";

type Props = {
  link: string,
  data: object | string,
  setModal: Function,
  openModal: Function
};

export default function Thumbnail(props: Props) {

  const {link, data, setModal, openModal} = props

  function handleClick() {
    setModal(data)
    openModal()
  }
  
  return (
    <div className="gallery--thumbnail-container">
      <img
        className="gallery--thumbnail"
        src={`/artwork/${link}`}
        alt=""
        loading="lazy"
        onClick={handleClick}
      />
    </div>
  );
}

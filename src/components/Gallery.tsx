import React from "react";
import Thumbnail from "./Thumbnail";

type Props = {
  data: any,
  currentCategory: string,
  setModal: Function,
  openModal: Function
}

export default function Gallery(props: Props) {
  const { data, currentCategory, setModal, openModal } = props
  const gallery = Object.keys(data).map((object) => {
    // If object is root and contains all singular posts 
    if (object == currentCategory) {
      return data[object].map((image: string) => {
        return <Thumbnail link={image} data={image} setModal={setModal} openModal={openModal} key={image}/>
      });
    // If object is a post with multiple images
    } else {
      return <Thumbnail link={data[object][0]} data={data[object]} setModal={setModal} openModal={openModal} key={data[object][0]}/>
    }
  });

  return <div className="gallery">{gallery}</div>;
}

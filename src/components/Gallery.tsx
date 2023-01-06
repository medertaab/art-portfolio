import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Gallery({ openModal, currentCategory, dataMerged }) {
  
 

  const gallery = dataMerged.map((image) => {
    if (!image.multiple) {
      return (
        <div className="gallery--thumbnail-container">
          <img
            className="gallery--thumbnail"
            src={`/artwork/${image.relativePath}`}
            alt=""
            key={image.relativePath}
            onClick={openModal}
            loading="lazy"
          />
        </div>
      );
    } else {
      return (
        <div className="gallery--thumbnail-container multiple">
          <img
            className="gallery--thumbnail"
            src={`/artwork/${image.relativePaths[0]}`}
            alt=""
            key={image.relativePath}
            onClick={openModal}
            loading="lazy"
            data-length={`${image.relativePaths.length}`}
          />
        </div>
      );
    }
  });

  return <div className="gallery">{gallery}</div>;
}

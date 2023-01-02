import React from "react";

type Props = {
  name: string;
  category: string;
  onclick: object
};

export default function CategoryTag(props: Props) {
  return (
    <button
      className="category-tag"
      onClick={props.onclick}
      data-category={props.category}
    >
      {props.name}
    </button>
  );
}
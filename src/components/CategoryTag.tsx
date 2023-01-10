import React from "react";

type Props = {
  name: string;
  category: string;
  onclick: any,
  isActive: boolean,
};

export default function CategoryTag(props: Props) {
  return (
    <button
      className={`category-tag ${props.isActive ? 'active' : ''}`}
      onClick={props.onclick}
      data-category={props.category}
    >
      {props.name}
    </button>
  );
}

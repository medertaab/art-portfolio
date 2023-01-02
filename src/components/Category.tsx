import React from "react";
import './styles/category.css'

type Props = {
  name: string,
  category: string
};

export default function Category(data: Props) {
  return (
    <div className="category-card" data-cat={data.category}>
      <h2>{data.name}</h2>
    </div>
  );
}

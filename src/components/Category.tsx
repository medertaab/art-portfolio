import { Link } from "gatsby";
import React from "react";
import "./styles/category.css";

type Props = {
  name: string;
  category: string;
};

export default function Category(data: Props) {
  return (
    <Link to={`/works/${data.category}`}>
      <button className={`category-card ${data.category}`} data-cat={data.category}>
        <h2>{data.name}</h2>
      </button>
    </Link>
  );
}

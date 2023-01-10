import * as React from "react";
import type { HeadFC} from "gatsby";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import CategoryCard from "../components/CategoryCard";
import HeadData from "../components/HeadData";
import "../styles/indexPage.css";

export default function IndexPage() {
  return (
    <Layout>
      <Carousel />
      <div className="categories">
        <CategoryCard name="Original illustrations" category="original" />
        <CategoryCard name="Client work" category="client" />
        <CategoryCard name="Fan art" category="fanart" />
      </div>
    </Layout>
  );
}

export const Head: HeadFC = function () {
  return <HeadData/>;
};

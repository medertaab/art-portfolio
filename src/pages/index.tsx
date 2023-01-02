import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import Slide from "../components/Slide";
import "./index.css";

export default function IndexPage() {
  return (
    <Layout>
      <Carousel>
      </Carousel>
      <div className="categories">
        <Category name="Original illustrations" category="original" />
        <Category name="Client work" category="client" />
        <Category name="Fan art" category="fanart" />
      </div>
    </Layout>
  );
}
export const Head: HeadFC = () => <title>Hellur</title>;

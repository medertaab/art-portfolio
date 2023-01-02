import React from "react";
import Layout from "../components/Layout";
import "./about.css";

type Props = {};

function About({}: Props) {
  return (
    <div>
      <Layout>
        <section className="about">
          <div className="about--image-container">
            <img className="about--image" src="/about_image.jpg" alt="" />
          </div>
          <div className="about--text">
            <h2>MEDER TAAB</h2>
            <p>
              Meder Taab is a professional illustrator who has created licensed
              artwork for Disney, Cartoon Network, and more. He has garnered
              widespread praise and appreciateion for his ethnically realistic
              renderings of popular characters, like his Avatar portrait series,
              which have regularly gone viral on social media.
            </p>
            <p>
              Meder specializes in semi-realistic illustrations and character
              design work that utilize modern fashion designs and trends.
            </p>
            <p>
              He also brings characters to life by animating his illustrations.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default About;

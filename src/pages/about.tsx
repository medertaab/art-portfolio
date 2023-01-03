import React from "react";
import Layout from "../components/Layout";
import "./about.css";

type Props = {};

function About({}: Props) {
  return (
    <div className="about-page">
      <Layout>
        <section className="about">
          <div className="about--image-container">
            <img className="about--image" src="/about_image.jpg" alt="" />
          </div>
          <div className="about--text">
            <h2>MEDER TAAB</h2>
            <h3>Illustrator and character artist</h3>
            <p>
              Meder Taab is a professional illustrator who has created licensed
              artwork for Disney, Cartoon Network, and more. He has garnered
              widespread praise and appreciateion for his ethnically realistic
              renderings of popular characters, like his Avatar: The Last Airbender portrait series,
              which have regularly gone viral on social media.
            </p>
            <p>
              Meder specializes in semi-realistic illustrations and character
              design work that utilize modern fashion designs and trends.
            </p>
            <p>
              He also brings characters to life by animating his illustrations.
            </p>
            <h3>
              Links
            </h3>
            <ul>
              <li><a href="http://twitter.com/medertaab">Twitter</a></li>
              <li><a href="http://instagram.com/medertaab">Instagram</a></li>
            </ul>
            <h3>Contact</h3>
            <ul>
              <li><a href="medertaab@gmail.com">medertaab@gmail.com</a></li>
              <li><a href="/contact">Contact form</a></li>
            </ul>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default About;

import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import CategoryTag from "../../components/CategoryTag";
import Modal from '../../components/Modal'
import "./index.css";


function Works(pageContext : Object) {
  const [currentCategory, setCurrentCategory] = useState("original");
  const [allImages, setAllImages] = useState();
  const [modalLink, setModalLink] = useState('')

  useEffect(() => {
    if (pageContext.pageContext.title) {
      setCurrentCategory(pageContext.pageContext.title)
    }
  }, [])

  console.log(pageContext)

  const imagesQuery = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: {} }) {
        nodes {
          relativePath
        }
      }
    }
  `);

  const imagesData = imagesQuery.allFile.nodes;

  const gallery = imagesData
    .filter((image: any) => image.relativePath.startsWith(currentCategory))
    .map((image: { relativePath: string }) => {
      return (
        <img
          className="gallery--thumbnail"
          src={`/artwork/${image.relativePath}`}
          alt=""
          key={image.relativePath}
          onClick={openModal}
          loading="lazy"
        ></img>
      );
    });

    function openModal(e: any) {
      setModalLink(e.target.src)
    }

    function closeModal() {
      setModalLink('')
    }

    function changeCategory(e: PointerEvent) {
    let newCategory = "";
    if (e.target) {
      newCategory = e.target.getAttribute("data-category");
    }
    setCurrentCategory(newCategory);
    window.history.pushState({}, '', `/works/${newCategory}`);
  }

  return (
    <div className={`works-page ${modalLink ? 'locked' : ''}`}>
      <Modal link={modalLink} closeModal={closeModal}/>
      <Layout>
        <div className="category-tags">
          <CategoryTag
            onclick={changeCategory}
            name="Original work"
            category="original"
            isActive={currentCategory == 'original' ? true : false}
          />
          <CategoryTag
            onclick={changeCategory}
            name="Client work"
            category="client"
            isActive={currentCategory == 'client' ? true : false}
          />
          <CategoryTag
            onclick={changeCategory}
            name="Fan art"
            category="fanart"
            isActive={currentCategory == 'fanart' ? true : false}
          />
        </div>

        <div className="gallery">{gallery}</div>
      </Layout>
    </div>
  );
}

export default Works;

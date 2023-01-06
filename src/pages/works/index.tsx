import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import CategoryTag from "../../components/CategoryTag";
import Modal from "../../components/Modal";
import Gallery from "../../components/Gallery";
import "./index.css";
import { graphql, useStaticQuery } from "gatsby";

function Works(pageContext: Object) {
  const [currentCategory, setCurrentCategory] = useState("original");
  const [modalLink, setModalLink] = useState("");
  const [modalLength, setModalLength] = useState(0);
  const [modalData, setModalData] = useState([])

  const categories = [
    { category: "original", title: "Original work" },
    { category: "client", title: "Client work" },
    { category: "fanart", title: "Fan art" },
  ];

  // Set category from URL
  useEffect(() => {
    if (pageContext.pageContext.title) {
      setCurrentCategory(pageContext.pageContext.title);
    }
  }, []);

  // Get all files from artwork directory
  const imagesQuery = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        nodes {
          relativePath
          relativeDirectory
        }
        group(field: { relativeDirectory: SELECT }) {
          nodes {
            relativeDirectory
            relativePath
          }
        }
      }
    }
  `);

  // Filter only current category
  const data = imagesQuery.allFile.group.filter((group) =>
    group.nodes[0].relativeDirectory.startsWith(currentCategory)
  );

  console.log('data', data)

  // Merge single and multiple image objects
  const dataMerged = data.reduce((acc, val) => {
    if (val.nodes[0].relativeDirectory == currentCategory) {
      val.nodes.map((item) => {
        item.multiple = false;
        acc.push(item);
      });
    } else {
      const multipleObject = val.nodes.reduce((acc, val) => {
        if (!acc.relativePaths) {
          acc.relativePaths = [val.relativePath];
        } else {
          acc.relativePaths.push(val.relativePath);
        }
        acc.multiple = true;
        return acc;
      }, {});
      return [multipleObject, ...acc];
    }
    return acc;
  }, []);

  console.log('datamerged', dataMerged)


  function openModal(e: any) {
    setModalLink(e.target.src);
    setModalLength(
      e.target.getAttribute("data-length")
        ? e.target.getAttribute("data-length")
        : 1
    );
  }

  function closeModal() {
    setModalLink("");
  }

  function changeCategory(e: PointerEvent) {
    let newCategory = "";
    if (e.target) {
      newCategory = e.target.getAttribute("data-category");
    }
    setCurrentCategory(newCategory)
    
    window.history.pushState({}, "", `/works/${newCategory}`);
  }

  return (
    <div className={`works-page ${modalLink ? "locked" : ""}`}>
      <Modal
        link={modalLink}
        closeModal={closeModal}
        modalLength={modalLength}
      />

      <Layout>
        <div className="category-tags">
          {categories.map((category) => {
            return (
              <CategoryTag
                onclick={changeCategory}
                name={category.title}
                category={category.category}
                isActive={currentCategory == category.category ? true : false}
              />
            );
          })}
        </div>

        <Gallery openModal={openModal} currentCategory={currentCategory} dataMerged={dataMerged}/>
      </Layout>
    </div>
  );
}

export default Works;

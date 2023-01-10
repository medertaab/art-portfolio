import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import CategoryTag from "../../components/CategoryTag";
import Modal from "../../components/Modal";
import Gallery from "../../components/Gallery";
import categories from "../../assets/categories";
import "../../styles/worksPage.css";
import { graphql, useStaticQuery } from "gatsby";
import type { HeadFC } from "gatsby";
import HeadData from "../../components/HeadData";

interface ContextObject {
  pageContext: {title: string}
}

function Works(pageContext: ContextObject) {
  const [currentCategory, setCurrentCategory] = useState(categories[0].category);
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState('')

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
      }
    }
  `);


  // Separate data by categories
  const dataSeparated = imagesQuery.allFile.nodes.reduce((acc, val) => {
    let root = val.relativeDirectory.split('/')[0]
    if (!acc[root]) {
      acc[root] = [val]
    } else {
      acc[root] = [...acc[root], val]
    }
    return acc
  }, {})

  // Merge single and multiple image objects
  let dataGrouped = {}
  Object.keys(dataSeparated).forEach(category => {
    let data = dataSeparated[category].reduce((acc, val) => {
      const folder = val.relativeDirectory.replace(`${category}/`, '')
      acc[folder] = acc[folder] || []
      acc[folder].push(val.relativePath)
      return acc
    }, {})
    dataGrouped[category] = data
  })



  function openModal(e: any) {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  function changeCategory(e: PointerEvent) {
    let newCategory = "";
    if (e.target) {
      newCategory = e.target.getAttribute("data-category");
    }
    setCurrentCategory(newCategory)
    
    window.history.pushState({}, "", `/works/${newCategory}`);
    scrollToTop()
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setModal(data : object | string) {
    setModalData(data)
  }

  return (
    <div className={`works-page ${modalOpen ? "locked" : ""}`}>
      <Modal
        closeModal={closeModal}
        modalOpen={modalOpen}
        modalData={modalData}
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
                key={category.title}
              />
            );
          })}
        </div>

        

        <Gallery openModal={openModal} currentCategory={currentCategory} data={dataGrouped[currentCategory]} setModal={setModal}/>
      
        <button className="back-top" onClick={scrollToTop}><span>↑</span></button>
      
      </Layout>
    </div>
  );
}

export default Works;

export const Head: HeadFC = function () {
  return <HeadData title="Works" />;
};
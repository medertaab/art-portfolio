const path = require(`path`)
// Log out information after a build is done

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const worksPage = path.resolve(`src/pages/works/index.tsx`)
  const pages = ['original', 'client', 'fanart']

  pages.forEach(page => {
    createPage({
      path: `/works/${page}`,
      component: worksPage,
      context: {
        title: page,
      },
    })
  })
}
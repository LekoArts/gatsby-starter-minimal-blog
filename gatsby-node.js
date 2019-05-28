const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  let slug

  if (node.internal.type === 'Mdx') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    } else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.js')
  const categoryTemplate = require.resolve('./src/templates/category.js')

  const result = await wrapper(
    graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              categories
            }
          }
        }
      }
    `)
  )

  const posts = result.data.allMdx.nodes

  posts.forEach((n, index) => {
    const next = index === 0 ? null : posts[index - 1]
    const prev = index === posts.length - 1 ? null : posts[index + 1]

    createPage({
      path: n.fields.slug,
      component: postTemplate,
      context: {
        slug: n.fields.slug,
        prev,
        next,
      },
    })
  })

  const categorySet = new Set()

  _.each(posts, n => {
    if (_.get(n, 'frontmatter.categories')) {
      n.frontmatter.categories.forEach(cat => {
        categorySet.add(cat)
      })
    }
  })

  const categories = Array.from(categorySet)

  categories.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}

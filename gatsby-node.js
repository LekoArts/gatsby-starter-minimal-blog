exports.onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MdxPage') {
    const fileNode = getNode(node.parent)
    // console.log(fileNode)
  }
}
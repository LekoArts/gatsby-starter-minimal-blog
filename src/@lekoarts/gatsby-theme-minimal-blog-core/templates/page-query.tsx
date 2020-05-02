import { graphql } from "gatsby"
import PageComponent from "../../gatsby-theme-minimal-blog/components/page"

export default PageComponent

export const query = graphql`
    query($slug: String!) {
        page(slug: { eq: $slug }) {
            title
            slug
            excerpt
            body
            ... on MdxPage {
                parent {
                    ... on Mdx {
                        frontmatter {
                            subtitle
                        }
                    }
                }
            }
        }
    }
`
/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

const Page = ({ data: { page } }) => (
  <Layout>
    <SEO title={page.title} description={page.excerpt} />
    <Heading variant="styles.h2">{page.title}</Heading>
    <h2>{page.parent.frontmatter.subtitle}</h2>
    <section sx={{ my: 5 }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
)

export default Page
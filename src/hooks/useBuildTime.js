import { useStaticQuery, graphql } from 'gatsby'

const useBuildTime = () => {
  const time = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD")
      }
    }
  `)

  return time.site.buildTime
}

export default useBuildTime

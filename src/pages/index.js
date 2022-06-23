import * as React from "react"
// import { withPrefix } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Layout>
      <Helmet>
        {/* <script src={withPrefix('index.js')} type="text/javascript"  defer/> */}
      </Helmet>
      <Seo title="Home" />
    </Layout>
  </>
)

export default IndexPage
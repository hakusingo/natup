import * as React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import SecondSection from "./secondSection"
import "@fontsource/open-sans/600.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/cormorant-garamond/500.css"
import "@fontsource/josefin-sans/600.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <SecondSection />
      <div>
        <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}

export default Layout

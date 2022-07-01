import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsbyで作ったよ</a>
      </footer>
    </>
  )
}

export default Footer

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import tw, { GlobalStyles } from 'twin.macro'

import Header from './header'

const Layout: FC = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
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
      <GlobalStyles />
      <Header siteTitle={data?.site?.siteMetadata?.title || `Title`} />
      <div css={tw`container mx-auto`}>
        <main>{children}</main>
        <footer css={tw`mt-1`}>&copy;</footer>
      </div>
    </>
  )
}

export default Layout

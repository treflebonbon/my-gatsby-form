import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'

import Layout from 'src/components/layout'
import Image from 'src/components/image'
import SEO from 'src/components/seo'

const IndexPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to &#34;Using TypeScript&#34;</Link>
  </Layout>
)

export default IndexPage

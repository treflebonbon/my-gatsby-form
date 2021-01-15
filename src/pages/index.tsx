import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import { ContactForm } from 'src/components/contact'

const IndexPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="Home" />
    <ContactForm />
  </Layout>
)

export default IndexPage

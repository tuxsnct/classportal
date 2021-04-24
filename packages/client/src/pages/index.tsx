import { graphql } from 'gatsby'
import React, { FC } from 'react'
import { Layout } from '../components'

const IndexPage: FC = () => {
  return (
    <Layout />
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle
      }
    }
  }
`

export default IndexPage

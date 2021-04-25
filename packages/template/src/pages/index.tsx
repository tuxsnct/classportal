import { graphql } from 'gatsby'
import React, { FC } from 'react'
import {
  BaseLayout,
  CardContainer,
  CardLabel,
  CardList,
  DashboardLayout
} from '../components'

const IndexPage: FC = () => {
  return (
    <BaseLayout title="ホーム">
      <DashboardLayout>
        <CardList>
        </CardList>
      </DashboardLayout>
    </BaseLayout>
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

import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

type SEOProps = {
  description?: string
  title?: string
}

const SEO: FC<SEOProps> = (props: SEOProps) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    titleTemplate,
    defaultTitle,
    defaultDescription,
    siteUrl,
    thumbnail
  } = site.siteMetadata
  const seo = {
    title: props.title,
    description: props.description || defaultDescription,
    image: `${siteUrl}${thumbnail}`,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet
      defaultTitle={defaultTitle}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:type" content="school" />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        titleTemplate
        defaultTitle
        defaultDescription
        siteUrl
        thumbnail
      }
    }
  }
`

export {
  SEO
}

import menuIcon from '@iconify-icons/mdi/menu'
import { InlineIcon } from '@iconify/react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, ReactNode } from 'react'
import { StoreContext } from 'storeon/react'
import { SEO } from '../'
import { store } from '../../store'
import { theme } from './theme'

type LayoutProps = {
  children?: ReactNode
  description?: string
  title?: string
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { site } = useStaticQuery(query)
  const { defaultTitle } = site.siteMetadata

  return (
    <StoreContext.Provider value={store}>
      <SEO />
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <InlineIcon icon={menuIcon} />
            </IconButton>
            <Typography variant="h6">
              { props.title || defaultTitle }
            </Typography>
          </Toolbar>
        </AppBar>
        { props.children }
      </ThemeProvider>
    </StoreContext.Provider>
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

export {
  Layout
}

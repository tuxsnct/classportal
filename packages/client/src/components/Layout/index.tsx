import documentIcon from '@iconify-icons/mdi/document'
import githubIcon from '@iconify-icons/mdi/github'
import homeIcon from '@iconify-icons/mdi/home'
import React, { FC, ReactNode } from 'react'
import { StoreContext, useStoreon } from 'storeon/react'
import tw, { GlobalStyles } from 'twin.macro'
import {
  AppBar,
  Flex,
  Icon,
  Main,
  SEO,
  Sidenav,
  SidenavLink,
  SidenavLinkExt,
  SidenavLabel
} from '../'
import { store } from '../../store'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

const LayoutContainer = tw.div`w-screen h-screen bg-gray-100`

const BaseLayout: FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <LayoutContainer>
      <SEO title={props.title} />
      <GlobalStyles />
      <StoreContext.Provider value={store}>
        <AppBar title={props.title} />
        {props.children}
      </StoreContext.Provider>
    </LayoutContainer>
  )
}

const DashboardLayout: FC = (props) => {
  const { sidenavVisibility } = useStoreon('sidenavVisibility')

  return (
    <>
      <Flex css={tw`flex-row w-screen h-screen pt-16 pb-2 box-border`}>
        <Sidenav css={sidenavVisibility && tw`hidden sm:flex`}>
          <SidenavLink to="/">
            <Icon icon={homeIcon} />
            <SidenavLabel>ホーム</SidenavLabel>
          </SidenavLink>
          <SidenavLinkExt href="https://github.com/tuxsnct/classportal">
            <Icon icon={documentIcon} />
            <SidenavLabel>ドキュメント</SidenavLabel>
          </SidenavLinkExt>
          <SidenavLinkExt href="https://github.com/tuxsnct/classportal">
            <Icon icon={githubIcon} />
            <SidenavLabel>ソースコード</SidenavLabel>
          </SidenavLinkExt>
        </Sidenav>
        <Main>
          {props.children}
        </Main>
      </Flex>
    </>
  )
}

export {
  BaseLayout,
  DashboardLayout
}

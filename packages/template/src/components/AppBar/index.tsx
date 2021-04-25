import styled from '@emotion/styled'
import menuIcon from '@iconify-icons/mdi/menu'
import React, { FC } from 'react'
import { useStoreon } from 'storeon/react'
import tw from 'twin.macro'
import { Icon } from '../'

type AppBarProps = {
  title?: string
}

const Container = styled.header`
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  ${tw`fixed top-0 inset-x-0 flex w-full h-16 p-2 box-border`}
`
const Heading = tw.h1`p-2 box-border text-2xl whitespace-nowrap overflow-hidden overflow-ellipsis`

const AppBar: FC<AppBarProps> = (props: AppBarProps) => {
  const { dispatch, sidenavVisibility } = useStoreon('sidenavVisibility')

  return (
    <Container>
      <Icon
        href="#"
        icon={menuIcon}
        tw="flex sm:hidden"
        onClick={() => { return dispatch('sidenav/toggleVisibility', sidenavVisibility) } }
      />
      <Heading>{props.title}</Heading>
    </Container>
  )
}

export {
  AppBar
}

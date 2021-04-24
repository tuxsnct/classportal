import React, { AnchorHTMLAttributes, FC } from 'react'
import tw from 'twin.macro'
import { Icon } from '../'

type CardActionProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any
}

const Container = tw.a`flex w-full px-2 bg-gray-100`
const Label = tw.span`flex items-center w-full p-2 box-border`

const CardAction: FC<CardActionProps> = ({ label, icon, ...rest }) => {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
      {icon && <Icon icon={icon} />}
    </Container>
  )
}

export {
  CardAction
}

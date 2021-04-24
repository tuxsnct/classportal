import { Icon as SvgIcon } from '@iconify/react'
import React, { AnchorHTMLAttributes, FC } from 'react'
import tw from 'twin.macro'

type IconProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: any
}

const Container = tw.a`flex w-12 h-12 justify-center items-center`

const Icon: FC<IconProps> = ({ icon, ...rest }: IconProps) => {
  return (
    <Container {...rest}>
      <SvgIcon icon={icon} width={24} height={24} />
    </Container>
  )
}

export {
  Icon
}

import React, { FC } from 'react'
import tw from 'twin.macro'

const Container = tw.div`w-full p-4 box-border`
const Label = tw.h2`text-2xl`

const CardLabel: FC = (props) => {
  return (
    <Container>
      <Label>{props.children}</Label>
    </Container>
  )
}

export {
  CardLabel
}

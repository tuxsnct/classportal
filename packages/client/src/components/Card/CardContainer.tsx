import React, { FC } from 'react'
import tw from 'twin.macro'

const Container = tw.div`flex flex-col w-full mb-4 shadow rounded bg-gray-300`

const CardContainer: FC = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export {
  CardContainer
}

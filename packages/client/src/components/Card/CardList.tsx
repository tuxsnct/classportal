import React, { FC, ReactNode } from 'react'
import tw from 'twin.macro'

type CardListProps = {
  children: ReactNode
}

const List = tw.div`w-full h-full p-4 box-border overflow-x-hidden`

const CardList: FC<CardListProps> = (props: CardListProps) => {
  return (
    <List>
      {props.children}
    </List>
  )
}

export {
  CardList
}

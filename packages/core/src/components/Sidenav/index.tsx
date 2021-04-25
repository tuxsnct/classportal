import { Link } from 'gatsby'
import tw from 'twin.macro'

const Sidenav = tw.div`
  flex flex-col h-full py-2 box-border shadow-none rounded-none sm:(shadow rounded-r) bg-gray-200
`
const SidenavLink = tw(Link)`flex w-screen sm:w-56 px-2 ripple-bg-gray-200`
const SidenavLinkExt = tw.a`flex w-screen sm:w-56 px-2 ripple-bg-gray-200`
const SidenavLabel = tw.span`flex justify-center items-center w-full h-12 text-lg whitespace-nowrap`

export {
  Sidenav,
  SidenavLink,
  SidenavLinkExt,
  SidenavLabel
}

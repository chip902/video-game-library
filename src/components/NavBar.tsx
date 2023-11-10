import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <HStack padding={'20px'}>
      <Image padding={'20px'} src={logo} boxSize={'100px'} />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar

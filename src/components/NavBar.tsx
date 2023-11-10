import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBar from './SearchBar'

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={'20px'}>
      <Image padding={'20px'} src={logo} boxSize={'100px'} />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar

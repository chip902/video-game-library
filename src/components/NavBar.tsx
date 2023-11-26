import { Box, HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack padding={'20px'}>
      <Link to={'/'}>
        <Box boxSize={'100px'} padding={'20px'}>
          <Image src={logo} />
        </Box>
      </Link>
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar

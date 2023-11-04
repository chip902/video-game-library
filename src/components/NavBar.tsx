import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'} padding={'20px'}>
            <Image padding={'20px'} src={logo} boxSize={"100px"} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
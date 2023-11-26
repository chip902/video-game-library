import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in-out',
      }}
      borderRadius={10}
      overflow={'hidden'}
    >
      {children}
    </Box>
  )
}

export default GameCardContainer

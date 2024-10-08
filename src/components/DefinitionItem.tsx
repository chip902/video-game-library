import { Box, Heading } from '@chakra-ui/layout'
import React, { ReactNode } from 'react'

interface Props {
  term: string
  children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="grey.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  )
}

export default DefinitionItem

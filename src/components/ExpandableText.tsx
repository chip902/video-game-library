import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  children: string
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false) //Init
  const limit = 300
  const summary = expanded ? children : children.substring(0, limit) + '...'

  if (!children) return null
  if (children.length <= limit) {
    return <Text>{children}</Text>
  } else
    return (
      <>
        <Text>{summary}</Text>
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      </>
    )
}

export default ExpandableText

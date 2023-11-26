import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <NavBar />
      <Box padding={15}>
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This Page Does Not Exist'
            : 'An Unexpected Error Occurred'}
        </Text>
      </Box>
    </>
  )
}

export default ErrorPage

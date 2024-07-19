import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  StackDivider,
  Stack,
  Box,
  Heading,
  Text
} from '@chakra-ui/react'
import useScreenSize from '../../features/useScreenSize'

const Analytics = () => {
  const screenSize = useScreenSize()

  return (
    <>
      <div className={`${screenSize.width < 1024 ? 'hidden' : ''}`}>
        <Card>
          <CardHeader>
            <Heading size='md'>Others Features</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Statments
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View your statments
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Direct Debits
                </Heading>
                <Text pt='2' fontSize='sm'>
                  lorem ipsum
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                  lorem ipsums
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Analytics
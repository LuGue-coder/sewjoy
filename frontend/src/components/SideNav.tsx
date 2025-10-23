import {Flex, Text, } from "@chakra-ui/react"

export default function SideNav() {
  return (
    <Flex  direction="column" alignItems="center"
     bgColor="lightsalmon"  minHeight="100vh" paddingTop="6rem" color="brown" fontSize="1.2rem" >
        <Text padding="1rem" >Projects</Text>
        <Text >Fabrics</Text>
    </Flex>
  )
}


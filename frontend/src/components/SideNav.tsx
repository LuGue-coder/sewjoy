import {Flex } from "@chakra-ui/react"
import { Link } from "react-router";

export default function SideNav() {
  return (
    <Flex  flex="1" direction="column"  alignItems="center" gap={2} 
    bgColor="lightsalmon" minHeight="100vh" paddingTop="6rem" color="brown" fontSize="1.2rem" 
     >
        <Link to= "/Projects" >Projects</Link>
        <Link to= "/Fabrics" >Fabrics</Link>
        <Link to="/Patterns"  >Patterns</Link>
    </Flex>
  )
}


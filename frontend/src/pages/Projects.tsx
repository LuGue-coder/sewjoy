import CardComponent from "@/components/CardComponent";
import SideNav from "@/components/SideNav";
import { Box } from "@chakra-ui/react";
import TopNav from "@/components/TopNav"


function Projects (){
    return (
        <>
        <Box display="grid" gridTemplateColumns="repeat(3,1fr)">
            <SideNav/>
            <TopNav/>
           <CardComponent />
        </Box>
        </>
      )
}
export default Projects
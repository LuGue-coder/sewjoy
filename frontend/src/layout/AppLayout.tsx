
import { Outlet } from "react-router";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";

function AppLayout() {
  return (
    <Grid  gridTemplateColumns="repeat(6,minmax(0, 1fr))"
            bg="lightyellow" h="100vh">
                <GridItem
                as="aside"
                colSpan={1}   
                >
                    <SideNav />
                    </GridItem>
    
                <GridItem
                as="main"
                colSpan={5}   
                overflowY="auto"
                >
                    <TopNav/>
                    <Container flex="1" p={6}>
                    <Outlet />
                    </Container>
                   
                </GridItem>
    
            </Grid>
  );
}
export default AppLayout


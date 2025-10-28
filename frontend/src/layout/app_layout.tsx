
import { Outlet } from "react-router";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";

function AppLayout() {
  return (
    <Grid  gridTemplateColumns="repeat(6,minmax(0, 1fr))"
            bg="lightyellow">
                <GridItem
                as="aside"
                colSpan={1}
                >
                <SideNav />
                </GridItem>
    
                <GridItem
                as="main"
                colSpan={5}
                >
                    <TopNav/>
                    <Box flex="1" p={6}>
                    <Outlet />
                    </Box>
                   
                </GridItem>
    
            </Grid>
  );
}
export default AppLayout


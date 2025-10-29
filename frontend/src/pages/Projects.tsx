import Dashboard from "@/components/Dashboard";
import SideNav from "@/components/SideNav";
import { Grid, GridItem } from "@chakra-ui/react";
import TopNav from "@/components/TopNav";

function Projects() {
  return (
    <Grid gridTemplateColumns="repeat(6,1fr)" bg="lightyellow">
      <GridItem as="aside" colSpan={1}>
        <SideNav />
      </GridItem>

      <GridItem as="main" colSpan={5}>
        <TopNav />
        <Dashboard />
      </GridItem>
    </Grid>
  );
}
export default Projects;

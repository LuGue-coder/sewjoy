// Cards.tsx
import { SimpleGrid, Button } from "@chakra-ui/react";
import CardComponent from "./CardComponent";
import TestProjects from "@/data/test_projects.json";


 interface TestProject {
  id: number;
  name: string;
  imageURL: string;
}


function Cards () {
  
const projects: TestProject[] = TestProjects;

return (
    
    
    <SimpleGrid columns={{ base: 1, sm: 3, md: 4 }} padding="5rem 2rem" gap={10} minChildWidth="250px">

        <Button fontSize="30px"rounded="l2"variant="outline" width="4rem" height="4rem" colorPalette="pink" mb={2} margin="auto">
        ➕
      </Button>

        {projects.map((project)=>
        <CardComponent name={project.name} id={project.id}
        imageURL={project.imageURL}/>)}

      </SimpleGrid>
    
        )}
export default Cards




import { SimpleGrid, Button, Heading } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";
import TestProjects from "@/data/test_projects.json";


 interface TestProject {
  id: number;
  name: string;
  imageURL: string;
}


function Projects_page () {
  
const projects: TestProject[] = TestProjects;

return (
    <>
    <Heading color="blackAlpha.700" fontSize="2rem">Projects</Heading>
    <SimpleGrid columns={{ base: 1, sm: 3, md: 4 }} padding="5rem 2rem" gap={10} minChildWidth="250px">

        <Button fontSize="30px"rounded="l2"variant="surface" width="4rem" height="4rem" colorPalette="orange" mb={2} margin="auto">
        ➕
      </Button>

        {projects.map((project)=>
        <CardComponent name={project.name} id={project.id}
        imageURL={project.imageURL}/>)}

      </SimpleGrid>
      </>
        )}
export default Projects_page


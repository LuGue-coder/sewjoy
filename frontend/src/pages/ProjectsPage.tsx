import { SimpleGrid, Button, Heading } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";

interface Project {
  id: number;
  name: string;
  imageURL: string;
}

function ProjectsPage() {
  const projects: Project[] = JSON.parse(
    localStorage.getItem("projects") || "[]"
  );

  return (
    <>
      <Heading color="blackAlpha.700" fontSize="2rem">
        | Projects
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 3, md: 4 }}
        padding="5rem 2rem"
        gap={10}
        minChildWidth="250px"
      >
        <Link to="/addproject">
          <Button
            fontSize="30px"
            rounded="l2"
            variant="solid"
            width="4rem"
            height="4rem"
            colorPalette="orange"
            mb={2}
            margin="auto"
          >
            <FaPlus />
          </Button>
        </Link>

        {projects.map((project) => (
          <CardComponent
            name={project.name}
            id={project.id}
            imageURL={project.imageURL}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
export default ProjectsPage;

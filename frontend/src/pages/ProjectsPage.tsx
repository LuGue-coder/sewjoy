import { SimpleGrid, Button, Heading } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";
import TestProjects from "@/data/test_projects.json";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface Project {
  id: number;
  name: string;
  imageURL: string;
}

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = localStorage.getItem("projects");
    return stored ? JSON.parse(stored) : TestProjects;
  });

  function addProject(newProject: Project) {
    const newProjects = [{ ...newProject, id: Date.now() }, ...projects];
    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects));
  }

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
        <Button
          onClick={() =>
            addProject({
              id: 0,
              name: "New Project",
              imageURL: "https://placehold.co/150?text=image",
            })
          }
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

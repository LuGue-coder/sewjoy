import { SimpleGrid, Button, Heading } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProjects } from "../database/projects";
import { deleteProject } from "../database/projects";

interface Project {
  id: string;
  name: string;
  imageURL: string;
  status?: string;
}

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      console.log("Fetched projects:", data);
      if (data) setProjects(data);
    };
    loadProjects();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteProject(id);
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

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
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            style={{ textDecoration: "none" }}
          >
            <CardComponent
              name={project.name}
              id={project.id}
              imageURL={project.imageURL}
              onDelete={() => handleDelete(project.id)}
            />
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
}
export default ProjectsPage;

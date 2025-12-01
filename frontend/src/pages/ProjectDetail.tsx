import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../database/db";
import {
  Spinner,
  Center,
  Text,
  Heading,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";

interface Project {
  id: string;
  name: string;
  status: string;
  imageURL?: string;
  images?: string[];
  notes?: string;
  fabricId?: string | null;
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //načtení projektu z firestore
  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (!id) return;
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          setError("Projekt nenalezen.");
          return;
        }

        const data = docSnap.data() as Project;
        setProject({
          id: docSnap.id,
          name: data.name,
          status: data.status,
          imageURL: data.imageURL || "",
        });
      } catch (error) {
        setError("Něco se nepovedlo při načítání projektu.");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
    console.log("ID from params:", id);
  }, [id]);

  //loading state
  if (loading) {
    return (
      <Center h="50vh">
        <Spinner size="xl" color="orange.500" />
      </Center>
    );
  }
  // error state
  if (error) {
    return (
      <Center h="50vh">
        <Text fontSize="lg" color="red.500">
          {error}
        </Text>
      </Center>
    );
  }
  if (!project) return null;

  return (
    <Box p={10}>
      <Heading color="orange.700" mb={8}>
        Detail projektu
      </Heading>

      <Flex direction="column" gap={6} maxW="500px">
        {/* Název projektu */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="orange.700">
            Název projektu:
          </Text>
          <Text fontSize="xl" color="orange.600">
            {project.name}
          </Text>
        </Box>

        {/* Status */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="orange.700">
            Status:
          </Text>
          <Text fontSize="xl" color="orange.600">
            {project.status}
          </Text>
        </Box>

        {/* Obrázek */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="orange.700" mb={2}>
            Obrázek:
          </Text>
          {project.imageURL ? (
            <Image
              src={project.imageURL}
              alt="Project"
              borderRadius="md"
              maxW="300px"
              objectFit="cover"
            />
          ) : (
            <Text>Žádný obrázek nebyl nahrán.</Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

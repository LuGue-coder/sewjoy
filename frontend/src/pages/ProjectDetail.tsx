import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../database/db";
import {
  Spinner,
  Center,
  Text,
  Heading,
  Box,
  Flex,
  Image,
  Editable,
  Button,
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
  const [editingName, setEditingName] = useState<string>("");
  const [editingStatus, setEditingStatus] = useState<string>("");
  const [editLoading, setEditLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

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

        //inicializace editovaných polí
        setEditingName(data.name);
        setEditingStatus(data.status);
      } catch (error) {
        setError("Něco se nepovedlo při načítání projektu.");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
    console.log("ID from params:", id);
  }, [id]);

  //save changes to firestore
  const handleEdit = async () => {
    if (!project) return;
    setEditLoading(true);
    try {
      const projectRef = doc(db, "projects", project.id);
      await updateDoc(projectRef, {
        name: editingName,
        status: editingStatus,
      });
      setProject({ ...project, name: editingName, status: editingStatus });
      setMessage("Projekt byl úspěšně aktualizován!");
    } catch (err) {
      console.error(err);
      setMessage("Chyba při aktualizaci projektu");
    } finally {
      setEditLoading(false);
    }
  };

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
      <Button colorPalette="orange" onClick={handleEdit} loading={editLoading}>
        Editovat
      </Button>
      <Flex direction="column" gap={6} maxW="500px">
        {/* Název projektu */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="orange.700">
            Název projektu:
          </Text>
          <Editable.Root
            value={project.name}
            onValueChange={(details) => setEditingName(details.value)}
          >
            <Editable.Preview
              fontSize="lg"
              color="orange.400"
              minH="20px"
              alignItems="flex-start"
              width="full"
            ></Editable.Preview>
            <Editable.Textarea />
          </Editable.Root>
        </Box>

        {/* Status */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="orange.700">
            Status
          </Text>
          <select
            value={editingStatus}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setEditingStatus(e.target.value)
            }
          >
            <option value=""> --Choose a status -- </option>
            <option value="idea">Idea</option>
            <option value="in_process">In Progress</option>
            <option value="done">Done</option>
          </select>
        </Box>

        {/* Message */}
        {message && (
          <Text mt={2} color={editLoading ? "gray.500" : "green.500"}>
            {message}
          </Text>
        )}

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

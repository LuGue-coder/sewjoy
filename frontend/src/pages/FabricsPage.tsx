import { SimpleGrid, Button, Heading } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { fetchFabrics } from "@/database/fabrics";
import { deleteFabric } from "../database/fabrics";

interface Fabrics {
  id: string;
  name: string;
  imageURL: string;
}

function FabricsPage() {
  const [fabrics, setFabrics] = useState<Fabrics[]>([]);

  useEffect(() => {
    const loadFabrics = async () => {
      const data = await fetchFabrics();
      if (data) setFabrics(data);
    };
    loadFabrics();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteFabric(id);
    setFabrics((prev) => prev.filter((f) => f.id !== id));
  };

  // function deleteFabric(id: number) {
  //   const updated = fabrics.filter((p) => p.id != id);
  //   setFabrics(updated);
  return (
    <>
      <Heading color="blackAlpha.700" fontSize="2rem">
        | Fabrics
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 3, md: 4 }}
        padding="5rem 2rem"
        gap={10}
        minChildWidth="250px"
      >
        <Link to="/addfabric">
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

        {fabrics.map((fabric) => (
          <CardComponent
            key={fabric.id}
            name={fabric.name}
            id={fabric.id}
            imageURL={fabric.imageURL}
            onDelete={() => handleDelete(fabric.id)}
            // onDelete={deleteFabric}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
export default FabricsPage;

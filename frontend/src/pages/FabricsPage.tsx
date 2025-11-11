import { SimpleGrid, Button, Heading } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import { useState, useEffect } from "react";

interface Fabrics {
  id: number;
  name: string;
  imageURL: string;
}

function FabricsPage() {
  const [fabrics, setFabrics] = useState<Fabrics[]>(() => {
    return JSON.parse(localStorage.getItem("fabrics") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("fabrics", JSON.stringify(fabrics));
  }, [fabrics]);

  function deleteFabric(id: number) {
    const updated = fabrics.filter((p) => p.id != id);
    setFabrics(updated);
  }

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
            onDelete={deleteFabric}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
export default FabricsPage;

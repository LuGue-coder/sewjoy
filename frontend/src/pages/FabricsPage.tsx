import { SimpleGrid, Button, Heading } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";
import TestFabrics from "@/data/test_fabrics.json";


 interface Fabrics {
  id: number;
  name: string;
  imageURL: string;

}


function FabricsPage () {
  
const fabrics: Fabrics[] = TestFabrics;

return (
    <>
    <Heading color="blackAlpha.700" fontSize="2rem">Fabrics</Heading>
    <SimpleGrid columns={{ base: 1, sm: 3, md: 4 }} padding="5rem 2rem" gap={10} minChildWidth="250px">

        <Button fontSize="30px"rounded="l2"variant="solid" width="4rem" height="4rem" colorPalette="orange" mb={2} margin="auto">
        ➕
      </Button>

        {fabrics.map((fabric)=>
        <CardComponent name={fabric.name} id={fabric.id}
        imageURL={fabric.imageURL}/>)}

      </SimpleGrid>
      </>
        )}
export default FabricsPage



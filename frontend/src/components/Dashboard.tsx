import { SimpleGrid } from "@chakra-ui/react";
import CardComponent from "./CardComponent";

function Cards() {
  return (
    <SimpleGrid padding="5rem 10rem" gap="10" minChildWidth="250px">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </SimpleGrid>
  );
}

export default Cards;

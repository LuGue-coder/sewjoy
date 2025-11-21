import { Box, Image, Text, Button } from "@chakra-ui/react";

type CardProps = {
  name: string;
  imageURL: string;
  id: string;
  onDelete: () => void;
};

function CardComponent({ name, imageURL, id, onDelete }: CardProps) {
  console.log("CardComponent rendered:", { name, imageURL, id });

  return (
    <Box
      bg="ivory"
      border="1px solid #ccc"
      borderRadius="md"
      p="1rem"
      textAlign="center"
    >
      <Image
        src={imageURL}
        alt={name}
        width="100%"
        height="150px"
        objectFit="cover"
        mb="1rem"
      />

      <Text color="blackAlpha.700" fontWeight="bold" mb="1rem">
        {name}
      </Text>

      <Button colorScheme="red" onClick={onDelete}>
        Delete
      </Button>
    </Box>
  );
}

export default CardComponent;

import { Button, Card, Image } from "@chakra-ui/react";

type CardProps = {
  name: string;
  imageURL: string;
  id: number;
  onDelete?: (id: number) => void;
};

function CardComponent(card: CardProps) {
  return (
    <Card.Root
      bgColor="ivory"
      flex="content"
      flexDirection="column"
      alignItems="center"
      paddingTop="2rem"
    >
      <Button mt={4} colorScheme="red" onClick={() => card.onDelete?.(card.id)}>
        Delete
      </Button>
      <Image
        width="10rem"
        height="10rem "
        src={card.imageURL}
        alt={card.name}
      />
      <Card.Body gap="2">
        <Card.Title color="blackAlpha.700">{card.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
}

export default CardComponent;
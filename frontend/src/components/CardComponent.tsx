
import {Card,Image} from "@chakra-ui/react";

type CardProps = {
  name:string,
  imageURL:string,
  id:number,
}

function CardComponent (card: CardProps) {
     return (

    
    <Card.Root bgColor="ivory" flex="content" flexDirection="column" alignItems="center" paddingTop="2rem">
      <Image width="10rem" height="10rem "
        src={card.imageURL}
        alt={card.name}
      />
      <Card.Body gap="2">
        <Card.Title  color="blackAlpha.700">{card.name}</Card.Title>
      </Card.Body>
    
    </Card.Root>
  )
};

export default CardComponent;

import { Image, Card } from "@chakra-ui/react"

const CardComponent = () => {
  
  /*const project {id:number, url: string, title: string,} ={
    id: 1,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVwggfmHMHimM-uOBmjaQ3DDXtB_mAGCByQ&s",
    title: "Pants",
  }*/
    
  return (
    <Card.Root width="15rem" bgColor="grey" borderRadius="2rem">
      <Card.Body gap="3">
          <Image  src="https://picsum.photos/200/300" aspectRatio={4 / 3}
      width="200px"/>
        <Card.Title mt="10" color="cornsilk">Nue Camp</Card.Title>
      </Card.Body>
    </Card.Root>
  )
}
export default CardComponent

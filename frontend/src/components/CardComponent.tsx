import { Image, Card } from "@chakra-ui/react"

const CardComponent = ( ) => {
  
  /*const project {id:number, url: string, title: string,} ={
    id: 1,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVwggfmHMHimM-uOBmjaQ3DDXtB_mAGCByQ&s",
    title: "Pants",
  }*/
    
  return (
    <Card.Root bgColor="wheat" borderRadius="2rem"border="none">
      <Card.Body >
          <Image  src="https://picsum.photos/200" aspectRatio={3 / 3}/>
        <Card.Title mt="2" color="brown" textAlign="center">Project Name</Card.Title>
      </Card.Body>
    </Card.Root>
  )
}
export default CardComponent

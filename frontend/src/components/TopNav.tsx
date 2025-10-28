import { Flex, Text, Spacer} from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react"

export default function TopNav() {
  return (
    <Flex  bgColor="wheat" p="1rem" alignItems="center" gap="3">

      <Spacer/>

       <AvatarGroup>
            <Avatar.Root colorPalette="red">
                <Avatar.Fallback />
                <Avatar.Image src="https://bit.ly/broken-link" />
            </Avatar.Root >
       </AvatarGroup>
       <Text color="black">Profile</Text>
       
      
    </Flex>
  );
}

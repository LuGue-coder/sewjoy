import { Flex, Text, Image } from "@chakra-ui/react";
import Avatar from "@/assets/Avatar.png"

export default function TopNav() {
  return (
    <Flex
      bgColor="gray.200"
    >
      <Text>| Projects</Text>
      <Image
        src={Avatar}
        alt="sewing-logo"
      />
    </Flex>
  );
}

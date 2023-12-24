import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Logos from "../components/Logos";
import { useState } from "react";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckernerg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let's talk about not Threads.</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid "}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>

      <Flex gap={3} my={3}>
        <Logos liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={3} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          188 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {288 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>🙋‍♂️</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />
      <Comment
        comment="Looks really bad!"
        createdAt="3d"
        likes={79}
        username="anabolicmark"
        userAvatar="https://bit.ly/prosper-baba"
      />
      <Comment
        comment="Good job lil Mark!"
        createdAt="6d"
        likes={119}
        username="bobthebuilder"
        userAvatar="https://bit.ly/kent-c-dodds"
      />
      <Comment
        comment="Looks madd!"
        createdAt="5d"
        likes={3}
        username="saltymark84"
        userAvatar="https://bit.ly/code-beast"
      />
    </>
  );
};

export default PostPage;

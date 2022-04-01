import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Textarea,
  useColorModeValue,
  Link,
  toast,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import "../components/propertyForm/fileUpload";
import PicturesWall from "../components/propertyForm/fileUpload";
import HelloMessage from "../components/propertyForm/fileUpload";
import ImageUpload from "../components/propertyForm/fileUpload";
import { useEffect } from 'react';
import { useRouter } from 'next/router';



export default function PropertyForm() {
  //const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();
  const router = useRouter();

  const submitForm = async (event) => {
    event.preventDefault();
    // const res = await fetch('/api/register', {
    //   body: JSON.stringify({
    //     name: event.target.name.value
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'POST'
    // })

    // const result = await res.json()

    console.log(
      event.target.firstName.value +
        " " +
        event.target.lastName.value +
        " " +
        event.target.email.value +
        " " +
        event.target.propertyName.value +
        " " +
        event.target.description.value +
        " " +
        event.target.monthlyRent.value +
        " " +
        event.target.bed.value +
        " " +
        event.target.bath.value

    );

   
    router.replace("/").then(()=>{
      toast({
        title: `Form Submitted!`,
        status: 'success',
        isClosable: true,
      })
    });
    
    
  };


  
    
 
  

  return (
    <Flex
      borderRadius="xl"
      borderWidth={3}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("blue.500", "white")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} className="main-text">
            List Your Property!
          </Heading>
          <Text fontSize={"lg"} color={"whiteAplha.900"} className="sub-text">
            Fill these details to add your property
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          color={"black"}
          p={8}
        >
          <form onSubmit={submitForm}>
            {" "}
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>


              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>


              <FormControl id="propertyName" isRequired>
                <FormLabel>Property Name</FormLabel>
                <InputGroup>
                  <Input type="text" />
                </InputGroup>
              </FormControl>

              <HStack>
                <Box>
                  <FormControl id="monthlyRent" isRequired>
                    <FormLabel>Monthly Rent</FormLabel>
                    <Input type="number" />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl id="bed" isRequired>
                    <FormLabel>Bed</FormLabel>
                    <Input type="number" />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl id="bath" isRequired>
                    <FormLabel>Bath</FormLabel>
                    <Input type="number" />
                  </FormControl>
                </Box>
              </HStack>


              <FormControl id="description" isRequired>
                <FormLabel>Property Description</FormLabel>

                <InputGroup >
               
                <Input type='text' css={{height:100}}/>
                
              </InputGroup>
              {/* <Textarea type="textarea" id="autosize" /> */}
                
              </FormControl>


                {/* <Box>
                <ImageUpload/> 
                </Box> */}


              <Stack spacing={10} pt={2}>
                <Button
                  type="Submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

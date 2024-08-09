import { Box, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepage = () => {

  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo){
      history.push("/chats");
    } 
  }, [history]);

  
  return (
    <Container maxW='xl' centerContent>
      <Center  h='70px' color='white'
      d="flex"
        justifyContent="center"
        textTransform="uppercase"
        p={3}
        bgColor="white"
        w="100%"
        m="60px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
      <Text fontSize="3xl" fontFamily="Work sans" color={"black"}>ChatMate</Text>
      </Center>
      <Box bg="white" w="100%" p={4} borderRadius="lg" Color='black' borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
               <Login/> 
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
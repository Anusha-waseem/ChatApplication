import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import "../home.css"


function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <div className="login">
    
           
    <Container maxW="2xl" centerContent>
      <Box
        d='flex'
        justifyContent='center'
        p={3}
        bg='#f8b6ef'
        w="100%"
        m="250px 0 15px 0"
        borderRadius="lg"
        borderWidth='12px'
        borderColor="black"
      >
        <Text justifyContent='center'
          fontSize="3rem" fontFamily='Sevillana' color='black'>BONJOUR</Text>
        </Box>
     
      <Box bg='#f8b6ef'  w="100%" p={4} borderRadius="lg" borderWidth="12px" borderColor="black">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab bg='black'>Login</Tab>
            <Tab bg='black'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
     
    </Container>
    
    </div>
  );
}

export default Homepage;

import { Flex, Text, Box, Container } from "@chakra-ui/layout";
import { Tab, TabList, Tabs, TabPanels, TabPanel } from "@chakra-ui/tabs";
import { Avatar } from "@chakra-ui/avatar";
import { BellIcon, SearchIcon, AddIcon } from "@chakra-ui/icons";
import DrawerExample from "./Drawer";
import { MenuDrop1, MenuDrop2, MenuDrop3, MenuDrop4 } from "./Menu";
import CreateProject from "./components/CreateProject";
import ListCards from "./components/ListCards/ListCards";
import Main from "./Main";
import AddCatlogDialog from "./components/Dialog/AddCatlogDialog";
import AddProjectResponsive from "./components/ProjectCreation/AddProjectResponsive";
import Completed from "./components/Completed/Completed";
import OverView from "./components/OverView";
import "./mycss.css";
function Head() {
  const listData1 = {
    title: "Early Stage",
    content: "Dummy Content",
    color: "#0CA5F2",
    items: [90.0001, 90.0004, 90.0002, 90.0003, 90.0005, 90.0006],
  };

  const listData2 = {
    title: "Research",
    content: "Dummy Text",
    color: "#E26ECC",
    items: [90.0001, 90.0004, 90.0002],
  };

  const listData3 = {
    title: "Ideate",
    content: "Understand",
    color: "#F3764B",
    items: [90.0001, 90.0004, 90.0002, 90.0003, 90.0005],
  };

  return (
    <>
      <Flex mt="4">
        <Box flex="0">
          <DrawerExample />
          {/* drawer here */}
        </Box>
        <Box flex="4">
          <Text py="3" ml="3">
            Cl - Corey - Animate a process for our website
          </Text>
        </Box>
        <Flex flex="1" flexDir="row">
          <MenuDrop1
            icon={
              <Avatar size="sm" 
              // name={userDetails} 
              mt="1" ml="1" src="" />
            }
            // name={userDetails}
          />
          <div className="icon">
            <MenuDrop2 icon={<BellIcon w={7} h={7} ml="1" mt="1" />} />
          </div>
          <div className="icon">
            <MenuDrop3 icon={<SearchIcon w={5} h={5} ml="1" mt="1" />} />
          </div>
          <div className="icon">
            <MenuDrop4 icon={<AddIcon w={4} h={4} ml="1" mt="1" />} />
          </div>
        </Flex>
      </Flex>
      <Flex mr="4vw">
        <Container mb="2" maxW="container.2.xl" mt="6" ml="75">
          <Tabs variant="enclosed">
            <TabList
            // bg='yellow'
            >
              <Tab>List</Tab>
              <Tab>Overview</Tab>
              <Tab>Completed</Tab>
              <Tab>Add Project</Tab>
              <Tab>
                <AddIcon w={3} h={3} />
              </Tab>
            </TabList>
            <Main />
            <TabPanels
              centerContent
              bg="#DADADA"
              position="relative"
              overflow="auto"
            >
              <TabPanel bg="#DADADA" maxW="5xl">
                <Flex>
                  <ListCards dataProp={listData1} />
                  <ListCards dataProp={listData2} />
                  <ListCards dataProp={listData3} />
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* <p>Overview</p> */}
                <Box m="6">
                  <OverView />
                </Box>
              </TabPanel>
              <TabPanel bg='white'>
                <Box m='6'>
                <Completed/>
                </Box>
              </TabPanel>
              <TabPanel bg='white'>
                {/* <p>Overview</p> */}
                <Box m='6'>
                <CreateProject />
                </Box>
              </TabPanel>
              <TabPanel>
                {/* <p>Add new project</p> */}
                <AddProjectResponsive />
              </TabPanel>
              <div style={{ position: "absolute", top: "0%", right: "2%" }}>
                <AddCatlogDialog />
              </div>
            </TabPanels>
          </Tabs>
        </Container>
      </Flex>
    </>
  );
}

export default Head;

// import { Flex, Text, Box, Container } from "@chakra-ui/layout";
// import { Tab, TabList, Tabs, TabPanels, TabPanel } from "@chakra-ui/tabs";
// import { Avatar } from "@chakra-ui/avatar";
// import { BellIcon, SearchIcon, AddIcon } from "@chakra-ui/icons";
// import DrawerExample from "../../Drawer";
// import MenuDrop from "../../Menu";
// import CreateProject from "../../components/CreateProject";
// import ListCards from "../../components/ListCards/ListCards";
// import Main from "../../Main";
// import AddCatlogDialog from "../../components/Dialog/AddCatlogDialog";
// import OverView from "../../components/OverView";

// function Completed() {
//   const listData1 = {
//     title: "Early Stage",
//     content: "Dummy Content",
//     color: "#0CA5F2",
//     items: [90.0001, 90.0004, 90.0002, 90.0003, 90.0005, 90.0006],
//   };

//   const listData2 = {
//     title: "Research",
//     content: "Dummy Text",
//     color: "#E26ECC",
//     items: [90.0001, 90.0004, 90.0002],
//   };

//   const listData3 = {
//     title: "Ideate",
//     content: "Understand",
//     color: "#F3764B",
//     items: [90.0001, 90.0004, 90.0002, 90.0003, 90.0005],
//   };

  

//   return (
//     <>
//       <Flex mt="4">
//         <Box flex="0">
//           <DrawerExample />
//           {/* drawer here */}
//         </Box>
//         <Box flex="4">
//           <Text py="3" ml="3">
//             Cl - Corey - Animate a process for our website
//           </Text>
//         </Box>
//         <Flex flex="1" flexDir="row">
//           <MenuDrop
//             icon={
//               <Avatar size="sm" name="Ryan Florence" mt="3" ml="3" src="" />
//             }
//           />
//           <MenuDrop icon={<BellIcon w={7} h={7} ml="3" mt="3" />} />
//           <MenuDrop icon={<SearchIcon w={5} h={5} ml="3" mt="3" />} />
//           <MenuDrop icon={<AddIcon w={4} h={4} ml="3" mt="3" />} />
//         </Flex>
//       </Flex>
//       <Flex mr="4vw">
//         <Container mb="2" maxW="container.2.xl" mt="6" ml="75">
//           <Tabs variant="enclosed">
//             <TabList
//             // bg='yellow'
//             >
//               <Tab>List</Tab>
//               <Tab>Overview</Tab>
//               <Tab>OverView 2</Tab>
//               <Tab>
//                 <AddIcon w={3} h={3} />
//               </Tab>
//             </TabList>
//             <Main />
//             <TabPanels centerContent position="relative">
//               <TabPanel bg="#DADADA" maxW="5xl">
//                 <Flex>
//                   <ListCards dataProp={listData1} />
//                   <ListCards dataProp={listData2} />
//                   <ListCards dataProp={listData3} />
//                 </Flex>
//               </TabPanel>
//               <TabPanel>
//                 {/* <p>Overview</p> */}
//                 <Box m="6">
//                   <OverView />
//                 </Box>
//               </TabPanel>
//               <TabPanel>
//                 <OverView/>
//               </TabPanel>
//               <TabPanel>
//                 {/* <p>Add new project</p> */}
//                 <CreateProject />
//               </TabPanel>
//               <div style={{ position: "absolute", top: "0%", right: "2%" }}>
//                 <AddCatlogDialog />
//               </div>
//             </TabPanels>
//           </Tabs>
//         </Container>
//       </Flex>
//     </>
//   );
// }

// export default Completed;










import { Center, } from "@chakra-ui/react";

import { Box, Flex, Text, Spacer } from "@chakra-ui/layout";

import { Link } from "@chakra-ui/react";

import { Heading } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import {
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Completed(x) {


  const projectsData = [
    {
      name: "CP",
      LinkName:"CL- Scott Build GIF Animations for new technology platform",
      people: 7,
      percentage: "50%",
      address: "/abc"
    },
    {
      name: "AK",
      LinkName:"CL- Scott Build GIF Animations for new technology platform",
      people: 4,
      percentage: "20%",
      address: "/abc"
    },
    {
      name: "DP",
      LinkName:"CL- Scott Build GIF Animations for new technology platform",
      people: 5,
      percentage: "69%",
      address: "/abc"
    },
    {
      name: "MK",
      LinkName:"CL- Scott Build GIF Animations for new technology platform",
      people: 9,
      percentage: "77%",
      address: "/abc"
    }

  ]

  const recentActivities = [
    {
      activity: "Vivek S added Neeleshwar K to CL- Scott Build GIF Animations for new Technology platform",
      time: "1day ago"
    },
    {
      activity: "Vivek S added Neeleshwar K to CL- Scott Build GIF Animations for new Technology platform",
      time: "1day ago"
    },
    {
      activity: "Vivek S added Neeleshwar K to CL- Scott Build GIF Animations for new Technology platform",
      time: "1day ago"
    },
    {
      activity: "Vivek S added Neeleshwar K to CL- Scott Build GIF Animations for new Technology platform",
      time: "1day ago"
    },
    {
      activity: "Vivek S added Neeleshwar K to CL- Scott Build GIF Animations for new Technology platform",
      time: "1day ago"
    }
  ]

  return (
    <>

        <Flex >
          <Center
            w="152px"
            h="152px"
            bg="tomato"
            mr="24px"
            fontSize="88px"
            color="white"
            borderRadius="4px"
            fontWeight="bold"

          >
            PC
          </Center>


          <Box >
            <Box mt="8px">Organization</Box>

            <Box>
              <Heading mt="2px" mb="4px">Projects Completed</Heading>
              <Text>Created on 24/09/2021</Text>
            </Box>

            
          </Box>
        </Flex>
        <Box mb="10px">

          <Divider h="4px" mt="5px" mb="20px"/>
          <Heading as="h4" size="m" mt="16px" mb="8px">
            Project Summary
          </Heading>

          {projectsData.map((data, index) => 
<>
<Flex mb="5px" p="5px" >

<Center
w="22px"
h="22px"
bg="tomato"
mr="24px"
fontSize="11px"
color="white"
borderRadius="4px"
fontWeight="bold"
 key={index}
>
  {data.name}
</Center>


          <span><Link  href={data.address}> <Text maxWidth="250px" isTruncated>{data.LinkName}</Text></Link></span>
<Spacer />
          <Text>{data.people}</Text>
<Spacer />
          <Text color = "teal">{data.percentage}</Text>
<Spacer />
{/* <div style={{ display: "inline" }}>hi</div> */}
<UnorderedList display = "inherit">
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
    <ListItem mr="12px"></ListItem>
  </UnorderedList>
<Spacer />
</Flex>
</>
)}

         
        </Box>
        <Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                  <Box flex="1" textAlign="left">
                    Recent Activities
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>

              {recentActivities.map((project, index) =>
              <>
              <UnorderedList style={{"list-style-type": "none"}}>
              <ListItem fontSize="14px" key={index}><Text isTruncated maxWidth="450px">{project.activity}</Text></ListItem>
              <span style={{"fontSize":"11px"}}>{project.time}</span>
                </UnorderedList>
              </>
              )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

    </>
  );
}


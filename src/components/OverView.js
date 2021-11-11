import { Avatar } from "@chakra-ui/avatar";
// eslint-disable-next-line
import { Button, IconButton } from "@chakra-ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { PieChart } from 'react-minimal-pie-chart';
import { Img } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { Component,UnorderedList,ListItem } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { SimpleGrid } from "@chakra-ui/react"
// eslint-disable-next-line
import AddProject from './ProjectCreation/AddProject';
// eslint-disable-next-line
import ProgressPieChart from './ProjectProgressChart/ProgressPieChart';
// eslint-disable-next-line
import AddProjectResponsive from './ProjectCreation/AddProjectResponsive';
// eslint-disable-next-line
import { Progress, Divider } from "@chakra-ui/react"
// eslint-disable-next-line
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"
// eslint-disable-next-line
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
const monthsData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const d = new Date();
// eslint-disable-next-line
let tDate
let fDate = d.getDate();
let fMonth
let tMonth
fMonth = d.getMonth();
const options = {
  chart: {
    renderTo: 'plot-container',
    type: 'area',
    zoomType: "x"
  },
  title: {
    // fontFamily: "Lato",
    text: 'Project progress stats'
  },
  xAxis: {
    title: {
      text: 'Date'
    },
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Reading (in units)'
    }
  },
  series: [{
    data: [0, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    color: 'rgba(192, 192, 192, 0)',
    pointStart: d.getUTCFullYear(),
    pointInterval: 3600 * 1000 * 24 
  },
  {
    data: [0, 9.9, 1.5, 16.4, 19.2, 14.0, 16.0, 15.6, 18.5, 26.4, 14.1, 95.6, 54.4],
    color: 'rgba(154, 198, 86, 0.45)',
    pointStart: d.getUTCFullYear(),
    pointInterval: 3600 * 1000 * 24 
  },
  {
    data: [0, 0.9, 1.5, 1.4, 119.2, 14.0, 16.0, 15.6, 18.5, 26.4, 14.1, 95.6, 54.4],
    color: 'rgba(154, 198, 86, 0.45)',
    pointStart: d.getUTCFullYear(),
    pointInterval: 3600 * 1000 * 24 
  }
  ]
}
export default class OverView extends Component {
  constructor(x) {
    super(x);
    this.state = { showComponent: false, };
    this.state = { showActivitiesVal: false, };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.showActivities = this.showActivities.bind(this);
    tDate = fDate + 7;
    if (tDate > 31) {
      tDate = tDate - 31
      tMonth = fMonth + 1;
    }
    if (fDate > 31) {
      fDate = fDate - 31
      tMonth = fMonth + 1;
    }
    if (tMonth > 12) {
      tMonth = tMonth - 12
    }
    if (fMonth > 12) {
      fMonth = fMonth - 12
    }
    this.state = {
      fromMonth:
        monthsData[fMonth],
      toMonth: monthsData[tMonth],
      fromDate:
      fDate,
    toDate: tDate -1
    }
    // Binding this keyword 
    this.updateState = this.updateState.bind(this)
    this.updateState2 = this.updateState2.bind(this)
  }
  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
  updateState() {
    fMonth = tMonth
    fDate = tDate
    tDate = tDate + 7
    if (tDate > 31) {
      tDate = tDate - 31
      tMonth = fMonth + 1;

    }
    if (fDate > 31) {
      fDate = fDate - 31
      tMonth = fMonth + 1;
    }
        if (tMonth > 12) {
      tMonth = tMonth - 12
    }
    if (fMonth > 12) {
      fMonth = fMonth - 12
    }



    // Changing state 
    this.setState({
      fromMonth:
        monthsData[fMonth],
      toMonth:
        monthsData[tMonth],
        fromDate:
        fDate-1,
      toDate: tDate -1
    })
  }

  updateState2() {
    tMonth = fMonth
    tDate = fDate
    fDate = fDate - 7
    if (fDate < 1) {
      fDate = fDate + 31
      console.log(fDate)
      tMonth = fMonth - 1;
    }
    if (fDate < 1) {
      fDate = fDate + 31
      tMonth = fMonth - 1;
    }    
    if (tMonth < 1) {
      tMonth = tMonth + 12
    }
    if (fMonth < 1) {
      fMonth = fMonth + 12
    }

    // Changing state 
    this.setState({
      fromMonth:
        monthsData[tMonth],
      toMonth:
        monthsData[fMonth],
        fromDate:
        fDate+1,
      toDate: tDate +1
    })
  }

  showActivities() {
    const { showActivitiesVal } = this.state;
    this.setState({
      showActivitiesVal: !showActivitiesVal,
    });
  }

  render() {
    return (
      <>
        <Box bg="#DADADA">
          <Flex flexDir="column" bg="white" w="80%" borderTopRadius="15">
            <Box m="4" border="1px solid #D4D4D4" borderRadius="6">
              <Flex>
                <Img
                  m="4"
                  bg=""
                  src="dev.JPG"
                  h="10rem"
                  w="8rem"
                  objectFit="cover"
                  borderRadius="8"
                />
                <Flex m="4" flexDir="column">
                  <Text fontSize="md" fontFamily="sans-serif">
                    Organization
                  </Text>
                  <Text
                    fontSize="5xl"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    Printing Books Organization
                  </Text>
                  <Text fontSize="md" fontFamily="sans-serif">
                    Created at Oct,4,2021
                  </Text>
                  <Flex flexDir="column" justify="end" flexGrow="1">
                    <Select
                      my="2"
                      color="teal"
                      outline="none"
                      border="none"
                      w="fit-content"
                      placeholder="In Progress"
                      size="sm"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box m="6">
              <Text fontSize="2xl" fontWeight="bold" fontFamily="sans-serif">
                Project Summary
              </Text>
              <Flex my="4">
                <Avatar src="dev.JPG" objectFit="scale-down" />
                <Text mx="2" my="2" fontSize="xl" fontFamily="sans-serif">
                  Printing Books Project
                </Text>
              </Flex>

            </Box>

            <Box bg='white' borderBottomRadius="15" >
              
            <Divider />
            <SimpleGrid columns={2} spacing={10}>
            <Box  height="40px">
            <Flex>
              <Text mx="20" my="2" fontSize="xl" fontFamily="sans-serif"  >
                Progress Stats
              </Text>
            </Flex>
            </Box>
            <Box  height="40px"></Box>
            <Box  height="350px">

            <Box ml='100px' mr='100px' w='300px' h='300px' justify='start'>
                <Flex flexDir="column">
                  <Box>
                    <PieChart
                      data={[
                        { title: 'One', value: 10, color: "rgb(233, 65, 78)" },
                        { title: 'Two', value: 15, color: 'rgb(10, 84, 104)' },
                        { title: 'Three', value: 20, color: 'rgb(169, 203, 119)' },
                      ]}
                      animate={true}
                      radius={25}
                    />
                  </Box>
                  <Box mt='-300' id="innerChart">
                    <PieChart
                      data={[
                        { title: 'Two', value: 15, color: 'rgb(10, 84, 104)' },
                        { title: 'Three', value: 20, color: 'rgb(169, 203, 119)' },
                        { title: 'One', value: 10, color: "rgb(233, 65, 78)" },

                      ]}
                      animate={true}
                      lineWidth={50}
                    />
                  </Box>
                  </Flex>
                </Box>

            </Box>
            <Box  height="350px">
                      
            <Box ml='100px' mr='100px' w='100px' h='100px' justify='end'>
                  <Box   w='200px' h='200px'>
                    <Flex flexDir="row">
                      <Box bg='rgb(10, 84, 104)' borderRadius='100%' w='16px' h='16px'>
                      </Box>
                      <Text ml='10px' mt='-5px' >
                        Project Name
                      </Text>
                      <Text ml='10px' mt='-5px' >
                        (100%)
                      </Text>
                    </Flex>
                    <br />
                    <br />
                    <Flex flexDir="row">
                      <Box bg='rgb(235, 94, 96)' borderRadius='100%' w='16px' h='16px'>
                      </Box>
                      <Text ml='10px' mt='-5px'>
                        Overdue
                      </Text>
                      <Text ml='10px' mt='-5px' >
                        (100%)
                      </Text>
                    </Flex>
                    <br />
                    <Flex flexDir="row">
                      <Box bg='rgb(248, 186, 9)' borderRadius='100%' w='16px' h='16px'>

                      </Box>
                      <Text ml='10px' mt='-5px'>
                        Today
                      </Text>
                      <Text ml='10px' mt='-5px' >
                        (100%)
                      </Text>
                    </Flex> <br />
                    <Flex flexDir="row">
                      <Box bg='rgb(122, 166, 166)' borderRadius='100%' w='16px' h='16px'>

                      </Box>
                      <Text ml='10px' mt='-5px'>
                        Tomorrow
                      </Text>
                      <Text ml='10px' mt='-5px' >
                        (100%)
                      </Text>
                    </Flex> <br />
                    <Flex flexDir="row">
                      <Box bg='rgba(122, 166, 166, 0.6)' borderRadius='100%' w='16px' h='16px'>

                      </Box>
                      <Text ml='10px' mt='-5px'>
                        Upcoming
                      </Text>
                      <Text ml='10px' mt='-5px' >
                        (100%)
                      </Text>
                    </Flex> <br />
                    <Flex flexDir="row">
                      <Box bg='rgba(122, 166, 166, 0.3)' borderRadius='100%' w='16px' h='16px'>

                      </Box>
                      <Text ml='10px' mt='-5px'>
                        Later
                      </Text>
                      <Text ml='10px' mt='-5px' >
                        (100%)
                      </Text>
                    </Flex> <br />
                    <Flex flexDir="row">
                      <Box bg='rgba(218, 218, 218, 0.45)' borderRadius='100%' w='16px' h='16px'>

                      </Box>
                      <Text ml='10px' mt='-5px'>
                        Unscheduled
                      </Text>
                      <Text ml='10px' mt='-5px' >
                        (100%)
                      </Text>
                    </Flex>
                  </Box>
                </Box>
            </Box>

</SimpleGrid>
          

            <Box>
            <SimpleGrid columns={2} spacing={0}>
            <Box  height="50px" width="100%"> 
              <Flex flexDir="row" mt='10px' mb='10px' >
                <Flex flexDir="row" ml='10px'>
                  <Box bg='rgba(218, 218, 218, 0.45)' borderRadius='100%' w='16px' h='16px'>

                  </Box>
                  <Text ml='10px' mt='-5px' >
                    To-Do
                  </Text>

                </Flex>

                <Flex flexDir="row" ml='10px'>
                  <Box bg='rgba(154, 198, 86, 0.45)' borderRadius='100%' w='16px' h='16px'>

                  </Box>
                  <Text ml='10px' mt='-5px' >
                    Inprogress
                  </Text>

                </Flex>

                <Flex flexDir="row" ml='10px'>
                  <Box bg='rgba(154, 198, 86, 0.7)' borderRadius='100%' w='16px' h='16px'>

                  </Box>
                  <Text ml='10px' mt='-5px' >
                    Completed
                  </Text>

                </Flex>

              </Flex></Box>
  </SimpleGrid>
  <SimpleGrid columns={1} spacing={0}>
       
                <HighchartsReact
                  highcharts={Highcharts}
                  options={options}
                />
       
              </SimpleGrid>
              <Divider />
              <Flex>
                <Text mx="2" my="2" fontSize="xl" fontFamily="sans-serif"  >
                  Weekly Summary
                </Text>
              </Flex>

              <Flex flexDir="row" mt='10px' mb='10px' >
                <Flex flexDir="row" ml='10px'>

                  <Text ml='10px' mt='-5px' >
                    {/* <DatePicker /> */}
                    <Button onClick={this.updateState2}>&lt;</Button> {this.state.fromDate},{this.state.fromMonth} - {this.state.toDate},{this.state.toMonth}    <Button onClick={this.updateState}>&gt;</Button>
                  </Text>
                </Flex>
              </Flex>
              <SimpleGrid columns={2} spacing={0}>
  {/* <Box  height="0px" width="250px"></Box> */}
  <Box ml='0px'  height="200px" width="915px">

  <Flex flexDir="row" mt='10px' mb='10px' >
                <Flex flexDir="row" ml='10px'>

                  <Text  >
                    To-Do
                  </Text>


                </Flex>

                <Flex flexDir="row" ml='216px'>

                  <Text  >
                    Completed
                  </Text>

                </Flex>

                <Flex flexDir="row" ml='200px'>

                  <Text  >
                    Created
                  </Text>

                </Flex>

              </Flex>

              <Flex flexDir="row" mt='10px' mb='10px' >
                <Flex flexDir="row" ml='10px'>

                  <Text  >
                    Sample Dynamic Data
                  </Text>


                </Flex>

                <Flex flexDir="row" ml='100px'>

                  <Text  >
                  Sample Dynamic Data
                  </Text>

                </Flex>

                <Flex flexDir="row" ml='100px'>

                  <Text  >
                  Sample Dynamic Data
                  </Text>

                </Flex>

              </Flex>

  </Box>

</SimpleGrid>

              <Divider />

              <Flex>
                <Button mx="10px" my="2" fontSize="xl" fontFamily="sans-serif" onClick={this.showActivities} >
                {this.state.showActivitiesVal === true ?                 <Img
                  m="4"
                  bg=""
                  src="dropdown.png"
                  h="1rem"
                  w="1rem"
                  objectFit="cover"
                  borderRadius="8"
                />:                <Img
                m="4"
                bg=""
                src="greater.png"
                h="1rem"
                w="1rem"
                objectFit="cover"
                borderRadius="8"
              />}  Recent Activities
                </Button>
              </Flex>
              <Divider />
              <Flex>
                {this.state.showActivitiesVal === true ?
// recentActivities.map((project, index) =>
//   <>
//   <UnorderedList style={{"list-style-type": "none"}}>
//   <ListItem fontSize="14px" key={index}><Text isTruncated maxWidth="450px">{project.activity}</Text></ListItem>
//   <span style={{"fontSize":"11px"}}>{project.time}</span>
//     </UnorderedList>
//   </>
//   )
                  <Text mx="1px" my="2" fontSize="xl" fontFamily="sans-serif"  >
                    Data to be loaded
                  </Text>
                  : ""}

              </Flex>
              <Divider />

            </Box>
          </Box>
          </Flex>

          <Button
            m="8"
            bg="black"
            _hover="none"
            color="white"
            size="lg"
            variant="ghost"
          >
            <AiOutlinePlus />
            <Text mx="2" onClick={this._onButtonClick}>Add Project
            </Text>
          </Button>
          {/* {this.state.showComponent ?
            <AddProject />  :
           null
        } */}
        </Box>
      </>
    );
  }
}

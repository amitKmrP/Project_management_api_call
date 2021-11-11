import React from 'react'
// eslint-disable-next-line
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
// eslint-disable-next-line
import { CloseIcon } from '@chakra-ui/icons'
// eslint-disable-next-line
import { Button, IconButton } from '@chakra-ui/button';
// eslint-disable-next-line
import { FormControl, FormHelperText } from '@chakra-ui/form-control';
// eslint-disable-next-line
import { Input } from '@chakra-ui/input';
// eslint-disable-next-line
import { Select } from '@chakra-ui/select';
// eslint-disable-next-line
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"
// eslint-disable-next-line
import { Text } from "@chakra-ui/react"
import '../../App.css'

// eslint-disable-next-line
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})
// eslint-disable-next-line
const theme = extendTheme({ breakpoints })

export default function AddPage() {

    return (
        <div >
           
            <Center>

            <Box  className="mainBox" w='1440px' h='900px' t='0px' l='0px' bg='#DADADA' position='absolute' border='1px solid #DADADA'>

                    <Center> 
                        {/* <Flex boxShadow='dark-lg' roundedRight='0' w='69vw' color='#DADADA' mb='10' > */}
                            
                            {/* <Box bg='#292C32' w='35%' h='60vh' /> */}
                           {/* eslint-disable-next-line */}

                           <Box w='943px' h='485px' mt='208px' l='249px'  borderRadius='8px'  bg='#FFFFFF' position='relative' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.06)'>
                           <Box ml='10' mr='10'>
                                <Flex justify='end'>
                        <Box position='absolute'   m='1%' w='10.67px' h='10.67px' mt='2.67px' mr='2.67'>
                            <IconButton  _hover='white' bg='transparent' >
                                <CloseIcon border='0px solid rgba(0, 0, 0, 0.4);'  />
                            </IconButton>
                        </Box>
                    </Flex>
                                    <Center color='black' mt='10vh' mb='5vh'>
                                        <Heading   position='absolute'  w='192px' h='36px' t='262px' l='176px'  length='36px'  fontSize='30px' fontWeight='400' fontFamily='Lato' >Create Project</Heading>
                                    </Center>
                                    <form>
                                        <FormControl id='projectName' mb='10px'>
                                            {/* <FormHelperText>Project Name</FormHelperText> */}
                                            <br />

                                            <Input position='absolute'   _focus="{ boxShadow: 'none' }" bg='rgba(234, 234, 236, 0.6);'
                                                 borderRadius='4px'   type="text" w='649px' h='40px' l='396px' t='352px'      ml='107px' mr='107px' placeholder='Project Name'   />
                                        </FormControl>
                                        <br /> 
                                        <FormControl id='projectName' mb='10px'>
                                            {/* <FormHelperText>Organization</FormHelperText> */}
                                            <br />

                                            {/* <Input bg='#EAEAEC' outlineColor='transparent' outline='none' type="text" /> */}
                                            <Select bg='rgba(234, 234, 236, 0.6);' position='absolute' className="selectOption" _focus="{ boxShadow: 'none' }"
                                                   w='649px' h='40px' l='396px' t='352px' borderRadius='4px'     ml='107px' mr='107px'     onchange="this.className=this.options[this.selectedIndex].className"                                                   >
                                                <option value="option1" selected >Organization</option>
                                                <option value="option2">Priya Organisation</option>
                                                <option value="option3">Printing Books Organization</option>
                                            </Select>
                                        </FormControl>

                                        <br />

                                        <FormControl id='projectName' mb='10px'>
                                            {/* <FormHelperText>Organization</FormHelperText>
                                            <FormHelperText>Template (Blank)</FormHelperText> */}
                                            <br />

                                            <Select bg='rgba(234, 234, 236, 0.6);' position='absolute' className="selectOption" _focus="{ boxShadow: 'none' }" 
                                               w='649px' h='40px' l='396px' t='352px' borderRadius='4px'     ml='107px' mr='107px' onchange="this.className=this.options[this.selectedIndex].className">
                                                <option value="option1" selected>Template</option>
                                                <option value="option2">Priya Organisation</option>
                                                <option value="option3">Printing Books Organization</option>
                                            </Select>
                                        </FormControl>

                                        <Flex justify='center' mt='100px' mb='5'>
                                            <Button size="sm"  mr='1' onClick={() => { }} outline="none"
                                               bg='#131923' borderRadius='5px' _hover="none" _focus="none" w='135px' h='40px' t='554px' l='597px'>
                                               <Center id="btnText"> Create </Center>
                                            </Button>
                                            <Button ml='1' size="sm"  border='1px solid #8A8886' _hover="{bg:'none'}" _focus="{ boxShadow: 'none' }" w='135px' h='40px' t='554px' l='754px'borderRadius='5px' >
                                            <Center id="btnText2"> Cancel</Center>
                                            </Button>
                                        </Flex>
                                    </form>

                                </Box>
                            </Box>
                        {/* </Flex> */}
                    </Center>
                </Box>
            </Center>
        </div>
    )
}

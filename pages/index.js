import Head from 'next/head'
import { Container, Flex, Box, IconButton, Center, Heading, FormControl, Input, Select, Button } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'
import { Stack, HStack, VStack } from "@chakra-ui/react"
export default function Home() {
    return (
        <Flex className="mainDivId" bg='#DADADA' position='absolute' border='1px solid #DADADA' alignItems="center" justifyContent="center" >
            <Flex className="subDivId" t='208px' l='249px' direction="column" borderRadius='8px' bg='#FFFFFF' position='absolute' >
                <Flex justify='end'>
                    <Box position='absolute' m='1%' w='10.67px' h='10.67px' mt='2.67px' mr='25.67'>
                        <IconButton _hover='white' bg='transparent' >
                            <CloseIcon border='0px solid rgba(0, 0, 0, 0.4);' />
                        </IconButton>
                    </Box>
                </Flex>

                <Center color='black' mt='10vh' mb='5vh'>
                    <Heading position='absolute' w='192px' h='36px' t='262px' l='176px' length='36px' fontSize='30px' fontWeight='400' fontFamily='Lato' >Create Project</Heading>
                </Center>
                <form>
                    <Container>
                        <VStack
                            mt='40px'
                            id="mainStack"
                            spacing={4}
                            align="stretch"
                        >
                            <Box h="40px" id="projName">
                            <FormControl id='projectName' mb='10px'>
                            <Input  position='absolute'   _focus="{ boxShadow: 'none' }" bg='rgba(234, 234, 236, 0.6);'
                                                 borderRadius='4px'   type="text"       placeholder='Project Name'   />
                                                 </FormControl>
                            </Box>
                            <Box h="40px" id="orgName">
                            <FormControl id='projectName' mb='10px'>
                            <Select  bg='rgba(234, 234, 236, 0.6);' position='absolute' className="selectOption" _focus="{ boxShadow: 'none' }"
                                                   borderRadius='4px'  onchange="this.className=this.options[this.selectedIndex].className"                                                  >
                                                <option value="option1" selected >Organization</option>
                                                <option value="option2">Priya Organisation</option>
                                                <option value="option3">Printing Books Organization</option>
                                            </Select>
                            </FormControl>

                            </Box>
                            <Box h="40px" id="orgName" >
                            <FormControl id='projectName' mb='10px'>

                            <Select bg='rgba(234, 234, 236, 0.6);' position='absolute' className="selectOption" _focus="{ boxShadow: 'none' }" 
                                                borderRadius='4px'       onchange="this.className=this.options[this.selectedIndex].className">
                                                <option value="option1" selected>Template</option>
                                                <option value="option2">Priya Organisation</option>
                                                <option value="option3">Printing Books Organization</option>
                                            </Select>
                                            </FormControl>

                            </Box>

                            <Box h="40px" >
                            <FormControl id='projectName' mb='10px'>

                            <Flex justify='center' mt='20px' mb='5' ml="100px" id="butnsId">
                                            <Button size="sm"  mr='1' onClick={() => { }} outline="none"
                                               bg='#131923' borderRadius='5px' _hover="none" _focus="none" w='135px' h='40px' t='554px' l='597px'>
                                               <Center id="btnText"> Create </Center>
                                            </Button>
                                            <Button ml='1' size="sm"  border='1px solid #8A8886' _hover="{bg:'none'}" _focus="{ boxShadow: 'none' }" w='135px' h='40px' t='554px' l='754px'borderRadius='5px' >
                                            <Center id="btnText2"> Cancel</Center>
                                            </Button>
                                        </Flex>
                                            </FormControl>

                            </Box>
                        </VStack>


                    </Container>

                    {/* <FormControl id='projectName' mb='10px'>
                                            <br />

                                            <Input id='projName' position='absolute'   _focus="{ boxShadow: 'none' }" bg='rgba(234, 234, 236, 0.6);'
                                                 borderRadius='4px'   type="text"       ml='157px' mr='107px' placeholder='Project Name'   />
                                        </FormControl>
                                        <br /> 
                                        <FormControl id='projectName' mb='10px'>
                                            <br />

                                            <Select  bg='rgba(234, 234, 236, 0.6);' position='absolute' className="selectOption" _focus="{ boxShadow: 'none' }"
                                                   w='649px' h='40px'  borderRadius='4px'  ml='157px' mr='107px' onchange="this.className=this.options[this.selectedIndex].className"   id='orgName'                                                >
                                                <option value="option1" selected >Organization</option>
                                                <option value="option2">Priya Organisation</option>
                                                <option value="option3">Printing Books Organization</option>
                                            </Select>
                                        </FormControl>

                                        <br />

                                        <FormControl id='projectName' mb='10px'>
                                         
                                            <br />

                                            <Select bg='rgba(234, 234, 236, 0.6);' position='absolute' className="selectOption" _focus="{ boxShadow: 'none' }" 
                                               w='649px' h='40px' l='396px' t='352px' borderRadius='4px'     ml='157px' mr='107px' onchange="this.className=this.options[this.selectedIndex].className">
                                                <option value="option1" selected>Template</option>
                                                <option value="option2">Priya Organisation</option>
                                                <option value="option3">Printing Books Organization</option>
                                            </Select>
                                        </FormControl>

                                        <Flex justify='center' mt='100px' mb='5' ml="100px">
                                            <Button size="sm"  mr='1' onClick={() => { }} outline="none"
                                               bg='#131923' borderRadius='5px' _hover="none" _focus="none" w='135px' h='40px' t='554px' l='597px'>
                                               <Center id="btnText"> Create </Center>
                                            </Button>
                                            <Button ml='1' size="sm"  border='1px solid #8A8886' _hover="{bg:'none'}" _focus="{ boxShadow: 'none' }" w='135px' h='40px' t='554px' l='754px'borderRadius='5px' >
                                            <Center id="btnText2"> Cancel</Center>
                                            </Button>
                                        </Flex> */}
                </form>
            </Flex>
        </Flex>
    )
}
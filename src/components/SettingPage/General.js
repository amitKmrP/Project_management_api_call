import React from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  Radio,
  RadioGroup,
  HStack,
  Checkbox,
  Button,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function General() {
  return (
    <div>
      <Stack maxWidth={500} spacing={6} marginRight="100px" marginTop="-100px">
        <Heading fontWeight="500" color="grey">
          Profile
        </Heading>

        <FormLabel color="black">picture</FormLabel>

        <div className="iconb">
          <Avatar
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
            bg="green.300"
            size="2xl"
          />
        </div>
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <FormControl color="black" id="Name">
          <FormLabel color="black">Name</FormLabel>
          <Input placeholder=" Name" w="790px" />
        </FormControl>

        <FormControl color="black" id="Description">
          <FormLabel color="black">Description</FormLabel>
          <Input w="790px" h="120px" />
        </FormControl>
        <FormControl color="black" id="Company">
          <FormLabel color="black">Company</FormLabel>
          <Input placeholder=" Company" w="790px" />
        </FormControl>
        <FormControl color="black" id="Description">
          <FormLabel color="black">Website</FormLabel>
          <Input placeholder=" Website" type="website" w="790px" />
        </FormControl>
        <FormControl id="ProfilrUrl" color="black">
          <FormLabel color="black">Profile URL</FormLabel>

          <HStack maxWidth={890} spacing={20} marginRight={-300}>
            <div className="singleline "> https://queppelin.io/u/</div>

            <Input color="black" placeholder="KT" w="585px" />
          </HStack>
        </FormControl>
      </Stack>
    </div>
  );
}

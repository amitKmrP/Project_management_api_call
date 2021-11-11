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
  Text
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
export default function Bascis() {
  return (
    <div>
      <Stack maxWidth={600} margin="auto" spacing={6} marginTop={-8}>
        <Heading fontWeight="500" color="grey">
          Basics
        </Heading>
        <FormControl id="email" color="black">
          <FormLabel color="black">Email Address</FormLabel>

          <HStack>
            <Input
              placeholder=" abc@queppelin.com"
              type="email"
              w="900px"
              isDisabled
            />
            <Button
              mt={4}
              colorScheme="black"
              variant="outline"
              w={118}
              h={10}
              isDisabled
            >
              {" "}
              Primary
            </Button>
            <Button mt={4} colorScheme="green" variant="outline" w={118} h={10}>
              {" "}
              Edit
            </Button>
          </HStack>

          <Button
            mt={4}
            leftIcon={<AddIcon />}
            colorScheme="green"
            variant="outline"
            w={140}
            h={10}
          >
            Add Email
          </Button>
        </FormControl>

        <FormControl id="changePassword" color="black">
          <FormLabel color="black">Change Password</FormLabel>
          <Button colorScheme="green" variant="outline" mt={3} w={180} h={10}>
            Change Password
          </Button>
        </FormControl>
        <FormControl id="Theme" color="black">
          <FormLabel color="black">Theme</FormLabel>
          <Select placeholder="Select Theme" w="790px">
            <option>light</option>
            <option>Dark</option>
          </Select>
        </FormControl>

        <FormControl id="Language" color="black">
          <FormLabel color="black">Language</FormLabel>

          <Select placeholder="Auto" w="790px">
            <option>English </option>
            <option>Deutsch</option>
            <option>Espanol</option>
          </Select>
        </FormControl>
        <FormControl id="DateandTime" color="black">
          <FormLabel color="black">Date and Time</FormLabel>
          <br />
          <HStack maxWidth={890} spacing={9} marginRight={-300}>
            <div className="test"> First day of week</div>

            <Select placeholder="Sunday" w="635px">
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday </option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday </option>
            </Select>
          </HStack>
          <br />
          <HStack maxWidth={890} spacing={87} marginRight={-300}>
            <div className="singleline "> Weekend</div>

            <Select placeholder="Saturday, Sunday" w="638px">
              <option>Friday, Saturday</option>
              <option>Sunday</option>
              <option> Friday</option>
              <option>Friday, Saturday</option>
            </Select>
          </HStack>
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="time" color="black"></FormLabel>

          <Checkbox color="black">Enable 24-Hour time</Checkbox>
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="visibility" color="black">
            Change profile visibility
          </FormLabel>
          <br />
          <RadioGroup defaultValue="member" color="#0a0909">
            <Stack spacing="17px">
              <Radio value="member" >
                Non-member users can only see your basic information excluding
                the email.
              </Radio>
              
              <Radio value="non-member" >
                Non-member users cannot access your profile page.
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Stack>
    </div>
  );
}

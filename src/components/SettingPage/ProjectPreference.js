import React from "react";

import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
  Checkbox,
  VStack,
} from "@chakra-ui/react";

export default function ProjectPreference() {
  return (
    <Stack
      maxWidth={500}
      margin="auto"
      spacing={6}
      marginTop="-170px"
      marginRight="278px"
    >
      <Heading fontWeight="500" color="grey">
        Project Preferences
      </Heading>
      <br />
      <FormControl as="fieldset">
        <FormLabel as="visibility" color="black">
          Display Mode
        </FormLabel>

        <RadioGroup defaultValue="bascisdisplay">
          <HStack spacing="30px">
            <Radio value="bascisdisplay" color="black">
              Bascis
            </Radio>
            <Radio value="advanceddisplay" color="black">
              Advanced
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl id="misc" color="black">
        <Stack spacing={4}>
          <FormLabel color="black">Misc</FormLabel>
          <Checkbox color="black">Pin detail panel by default</Checkbox>
          <Checkbox color="black">Collapse all subtasks by default</Checkbox>
          <Checkbox color="black">
            Automatically assign new tasks to myself
          </Checkbox>
          <Checkbox color="black">Strikethrough completed tasks</Checkbox>
        </Stack>
      </FormControl>
    </Stack>
  );
}
export function Advanced() {
  return (
    <div>
      <Stack marginRight="430px" marginTop="-270px">
        <div className="heading1">
          <Heading fontWeight="500" color="grey">
            Advanced
          </Heading>
        </div>

        <br />
        <div className="deleteButton">Delete Account</div>
      </Stack>
    </div>
  );
}

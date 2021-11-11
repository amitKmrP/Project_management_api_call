import React from "react";

import {
  FormControl,
  FormLabel,
  Stack,
  Select,
  Checkbox,
  Button,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";

export default function Subscription() {
  return (
    <div>
      <Stack
        maxWidth={600}
        margin="auto"
        spacing={5}
        marginTop="-270px"
        marginRight="50px"
      >
        <Heading fontWeight="500" color="grey">
          Subscribed Organizations
        </Heading>

        <FormLabel color="black">
          Below is the list of all organizations and their associated
          subscription plans.
        </FormLabel>

        <Button
          mt={4}
          color="#CBD5E00"
          textColor="#A0AEC0"
          variant="outline"
          w={118}
          h={10}
        >
          {" "}
          Refresh List
        </Button>
      </Stack>
    </div>
  );
}

export function AuthorizedApp() {
  return (
    <div>
      <Stack
        maxWidth={600}
        margin="auto"
        spacing={5}
        marginTop="-270px"
        marginRight="5px"
      >
        <Heading fontWeight="500" color="grey">
          Authorized Apps
        </Heading>

        <FormLabel color="black">
          You have authorized the following applications with Queppelin. For
          more integrations,{" "}
          <Link color="green">visit Quppelin App Directory.</Link>
        </FormLabel>
        <br />
        <HStack spacing={4}>
          <Button
            color="#CBD5E00"
            textColor="#A0AEC0"
            variant="outline"
            w={118}
            h={10}
          >
            Refresh List
          </Button>

          <Button colorScheme="green" variant="outline" w={118} h={10}>
            Add new App
          </Button>
        </HStack>
      </Stack>
    </div>
  );
}

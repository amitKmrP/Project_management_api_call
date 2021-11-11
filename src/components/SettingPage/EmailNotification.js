import React from "react";

import {
  FormControl,
  FormLabel,
  Stack,
  Select,
  Checkbox,
  Heading,
} from "@chakra-ui/react";

export default function EmailNotification() {
  return (
    <Stack maxWidth={600} margin="auto" spacing={6} marginTop={-48}>
      <Heading fontWeight="500" color="grey">
        Email Notification
      </Heading>

      <FormControl id="email1" color="black">
        <FormLabel color="black">Send Activity Notifications</FormLabel>

        <Select placeholder="None" w="790px">
          <option>Per Update </option>
          <option>Hourly</option>
          <option>Daily</option>
          <option>Weekly</option>
        </Select>
      </FormControl>

      <FormControl id="email1" color="black">
        <Stack spacing={4}>
          <FormLabel color="black">Updates from queppelin</FormLabel>
          <Checkbox color="black">
            Updates about product and feature release
          </Checkbox>
          <Checkbox color="black">New blog posts</Checkbox>
          <Checkbox color="black">
            Updates about queppelin membership and policy
          </Checkbox>
          <Checkbox color="black">Receive queppelin research survey</Checkbox>
        </Stack>
      </FormControl>
    </Stack>
  );
}

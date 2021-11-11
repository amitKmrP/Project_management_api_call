import React from "react";

import {
  FormControl,
  FormLabel,
  Stack,
  Select,
  HStack,
  Heading,
} from "@chakra-ui/react";

export default function ReminderForm() {
  return (
    <Stack maxWidth={600} margin="auto" spacing={6} marginTop={-48}>
      <Heading fontWeight="500" color="grey">
        Reminders
      </Heading>

      <FormControl id="task" color="black">
        <FormLabel color="black">Remind Upcoming Tasks</FormLabel>
        <HStack spacing={4} mr={-40}>
          <Select placeholder="None" w="2000px">
            <option>12 hrs before </option>
            <option>1 day before</option>
            <option>2 day before</option>
            <option>3 day before </option>
            <option>At start of the day</option>
            <option>At start of the week</option>
          </Select>
          <text> at</text>
          <Select placeholder="00:00" w="2000px">
            <option>01:00 </option>
            <option>02:00 </option>
            <option>03:00 </option>
            <option>04:00 </option>
            <option>05:00 </option>
            <option>06:00 </option>
            <option>07:00 </option>
            <option>08:00 </option>
            <option>09:00 </option>
            <option>10:00 </option>
            <option>11:00 </option>
            <option>12:00 </option>
          </Select>
        </HStack>
      </FormControl>

      <FormControl id="task2" color="black">
        <FormLabel color="black">Remind Upcoming Tasks</FormLabel>

        <Select placeholder="None" w="759px">
          <option>Next Day </option>
          <option>2 Days later</option>
          <option>At the start of next week</option>
        </Select>
      </FormControl>

      <FormControl id="task2=3" color="black">
        <FormLabel color="black">Remind Overdue Tasks</FormLabel>

        <Select placeholder="None" w="759px">
          <option>Next Day </option>
          <option>2 Days later</option>
          <option>At the start of next week</option>
        </Select>
      </FormControl>
    </Stack>
  );
}

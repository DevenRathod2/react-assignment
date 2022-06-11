import { React, useState } from "react";
import {
  Container,
  Box,
  Text,
  Center,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // get current date
  const [endingDate, setEndingDate] = useState(new Date()); // get ending date from users
  const [Salary, setSalary] = useState(0); // get salary from users
  const [totalYears, setTotalYears] = useState([]); // get total years from users
  const [totalLibilities, setTotalLibilities] = useState([]); // get total libilities from users

  const startDate = currentDate.getFullYear();
  const endDate = endingDate.getFullYear();

  if (startDate < endDate) {
    for (let i = startDate; i < endDate; i++) {
      totalYears.push(i);
      console.log(i);
    }
  }

  const totalMonths = totalYears.length * 12;
  const totalNetworth = totalMonths * Salary;

  return (
    <>
      <Box bg={"white"} height={"100vh"} width={"100%"}>
        <Box>
          <Center>
            <Text fontSize={"3xl"} fontWeight={"bold"} marginTop={"40px"}>
              Calculate Your Net worth
            </Text>
          </Center>
        </Box>
        <Center>
          <Box
            display={"flex"}
            width={"40%"}
            alignItems={"center"}
            justifyContent={"center"}
            marginTop={"40px"}
          >
            <Box>
              <label htmlFor="salary">Add Monthly Salary</label>
              <Input
                htmlSize={4}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Monthly Salary"
                type={"number"}
                required
              />
              <label htmlFor="salary">Add Libilities</label>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <label htmlFor="salary">Select Retirement Date</label>
              <DatePicker
                selected={endingDate}
                onChange={(date: Date) => setEndingDate(date)}
              />
              <Button>Calculate</Button>
            </Box>
          </Box>
        </Center>
        <Center>
          <Box>
            <Text>your salary: {Salary}</Text>
            {/* <Text>Your Net Worth is: {netWorth()}</Text> */}
            <Text>Current Date : {startDate}</Text>
            <Text>Ending Date : {endDate}</Text>
            <Text>Total Months : {totalMonths}</Text>
            <Text>Your Total Networth : {totalNetworth}</Text>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Home;

// get total months from current date till retirement year and the multiply it by the salary

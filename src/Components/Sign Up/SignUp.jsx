import React, { useState } from "react";
import "./SignUp.css";
import {
  Box,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  InputLeftAddon,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";

// let userData = {
//   email: "admin@admin.com",
//   password: "123",
//   username: "admin-user",
//   age: "23",
//   city: "Tanta",
//   country: "EGYPT",
// };

export default function SignUp() {
  const { signUp, loading, error } = useSignup();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show); //Password Show Hide Chakra UI

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="signupContent">
        <div className="signupForm">
          <Stack spacing={4}>
            <FormControl>
              <HStack className="mb-2">
                <Box>
                  <FormControl id="firstName">
                    <Input type="text" size="lg" placeholder="First Name*" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <Input type="text" size="lg" placeholder="Last Name" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl className="mb-2" id="userName" isRequired>
                <Input
                  type="text"
                  size="lg"
                  placeholder="Username*"
                  name="hidden"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl className="mb-2" id="email" isRequired>
                <Input
                  type="email"
                  size="lg"
                  placeholder="Email address*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <InputGroup size="lg" className="mb-2">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  isRequired
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup size="lg" className="mb-2">
                <InputLeftAddon
                  className="SignUpInputLeftAddon"
                  children="+20"
                />
                <Input type="tel" placeholder="phone number" size="lg" />
              </InputGroup>
              <HStack className="mb-2">
                <Box className="w-50">
                  <Select size="lg" placeholder="City">
                    <option value="option2">Tanta Zifta Mit Ghamr</option>
                    <option value="option3">Option 3</option>
                  </Select>{" "}
                </Box>
                <Box className="w-50">
                  <Select size="lg" placeholder="Feilds of Expertise">
                    <option value="option2">Tanta Zifta Mit Ghamr</option>
                    <option value="option3">Option 3</option>
                  </Select>{" "}
                </Box>
              </HStack>
            </FormControl>
            <Stack spacing={10} pt={0}>
              <Button
                loadingText="Signing up"
                size="lg"
                className="main-btn"
                isLoading={loading}
                onClick={() => signUp({ email, password, userName })}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={3}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link className="SignupLoginTxt " to="/signin">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
}

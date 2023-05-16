import React, { useState } from "react";
import "./SignIn.css";
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  Text,
  Checkbox,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useLogin from "../../Hooks/useLogin";

export default function SignIn() {
  const { logIn, loading, error } = useLogin();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show); //Password Show Hide Chakra UI
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="SignInContent">
        <div className="SignInForm">
          <Stack spacing={10}>
            <FormControl className="w-100">
              <FormControl className="mb-2" id="email" isRequired>
                <Input
                  type="email"
                  size="lg"
                  placeholder="Email address*"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <InputGroup size="lg" className="mb-2">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Stack
                className="mt-2"
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link>Forgot password?</Link>
              </Stack>
            </FormControl>
            <Stack spacing={0} pt={0}>
              <Button
                loadingText="Logining..."
                size="lg"
                className="main-btn" 
                isLoading={loading}
                onClick={() => logIn({ email, password })}
              >
                Sign In
              </Button>
              <HStack pt={5}>
                <Button
                  colorScheme="white"
                  className="text-muted bg-white"
                  leftIcon={<FcGoogle />}
                >
                  Continue with Google
                </Button>
                <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                  Continue with Facebook
                </Button>
              </HStack>
              <Stack pt={4}>
                <Text align={"center"}>
                  Create New Account ?{" "}
                  <Link className="SignInLoginTxt" to="/signup">
                    Sign Up
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
}

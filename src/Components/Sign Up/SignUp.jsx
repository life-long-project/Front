import React, { useEffect, useState } from "react";
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
import { useAxiosGet } from "../../Hooks/useAxiosGet";

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
  const [showPw, setShowPw] = useState(false);
  const [showRePw, setShowRePw] = useState(false);
  const handleClickPw = () => setShowPw(!showPw); //Password Show Hide Chakra UI
  const handleClickRePw = () => setShowRePw(!showRePw); //Password Show Hide Chakra UI

  // const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirm_password, setConfirm_password] = useState("");
  // const [cities, setCities] = useState([]);

  const [userData, setUserData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    gender: "",
    city: "",
  });

  function getInputData(e) {
    let user = { ...userData };
    user[e.target.name] = e.target.value;
    setUserData(user);
  }

  const { data: citiesData } = useAxiosGet(
    "https://back-ph2h.onrender.com/cities"
  );

  return (
    <>
      <div className="signupContent">
        <div className="signupForm">
          <Stack spacing={4}>
            <FormControl>
              <HStack className="mb-2">
                <Box>
                  <FormControl id="firstName">
                    <Input
                      type="text"
                      size="lg"
                      placeholder="First Name*"
                      name="f_name"
                      onChange={getInputData}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <Input
                      type="text"
                      size="lg"
                      placeholder="Last Name"
                      name="l_name"
                      onChange={getInputData}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl className="mb-2" id="email" isRequired>
                <Input
                  type="email"
                  size="lg"
                  placeholder="Email address*"
                  name="email"
                  value={userData.email}
                  onChange={getInputData}
                />
              </FormControl>
              <InputGroup size="lg" className="mb-2">
                <Input
                  pr="4.5rem"
                  type={showPw ? "text" : "password"}
                  placeholder="Enter password"
                  isRequired
                  name="password"
                  id="password"
                  value={userData.password}
                  onChange={getInputData}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClickPw}>
                    {showPw ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup size="lg" className="mb-2">
                <Input
                  pr="4.5rem"
                  type={showRePw ? "text" : "password"}
                  placeholder="Re Enter password"
                  isRequired
                  id="confirm_password"
                  name="confirm_password"
                  value={userData.confirm_password}
                  onChange={getInputData}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClickRePw}>
                    {showRePw ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup size="lg" className="mb-2">
                <InputLeftAddon
                  className="SignUpInputLeftAddon"
                  children="+20"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  id="phone"
                  size="lg"
                  name="phone"
                  onChange={getInputData}
                />
              </InputGroup>
              <HStack className="mb-2">
                <Box className="w-50">
                  <Select
                    size="lg"
                    placeholder="City"
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }));
                    }}
                  >
                    {citiesData &&
                      citiesData.map((city, key) => {
                        return (
                          <option key={key} value={city}>
                            {city}
                          </option>
                        );
                      })}
                  </Select>
                </Box>
                <Box className="w-50">
                  <FormControl id="gender">
                    <Select
                      size="lg"
                      placeholder="Gender"
                      onChange={(e) => {
                        setUserData((prev) => ({
                          ...prev,
                          gender: e.target.value,
                        }));
                      }}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                  </FormControl>
                </Box>
              </HStack>
            </FormControl>
            <Stack spacing={10} pt={0}>
              <Button
                loadingText="Signing up"
                size="lg"
                className="main-btn"
                isLoading={loading}
                onClick={() => signUp(userData)}
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

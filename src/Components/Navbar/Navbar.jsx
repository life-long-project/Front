import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//chakra UI
import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={3}>
        <Box p="2">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <Box display="flex" alignItems="center" gap={2}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
            >
              Your Cats
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/120/120"
                  alt="Simon the pensive"
                  mr="12px"
                />
                <span>Simon the pensive</span>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
            >
              MenuItem
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                <MenuItemOption value="asc">Ascending</MenuItemOption>
                <MenuItemOption value="desc">Descending</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title="Country" type="checkbox">
                <MenuItemOption value="email">Email</MenuItemOption>
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="country">Country</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}

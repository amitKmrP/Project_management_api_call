import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/menu";
import {
  SettingsIcon,
  EmailIcon,
  QuestionOutlineIcon,
  LockIcon,
  StarIcon,
  HamburgerIcon,
  InfoIcon,
} from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { ModalN1, ModalN2 } from "./ModalN";
import CreateProject from "./components/CreateProject";

function MenuDrop1(props) {
  const [isSignedUp, setIsLoggedIn] = useState(false)

  function logout(){
    setIsLoggedIn(true)
  }
  if (isSignedUp) {
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    window.location.href = "/";
  }
  return (
    <div>
      <Menu>
        <MenuButton as={Button} bg="white" color="black">
          {props.icon}
        </MenuButton>
        <MenuList w="14" h="360">
          <MenuItem fontWeight="bold" color="grey">
            {props.name}
          </MenuItem>
          <MenuDivider />

          <MenuItem icon={<InfoIcon />}>Profile</MenuItem>

          <MenuItem icon={<EmailIcon />}>My Subscriptions </MenuItem>
          <MenuItem icon={<HamburgerIcon />}>My Apps</MenuItem>
          <NavLink to="setting">
            {" "}
            <MenuItem icon={<SettingsIcon />}>Account Settings</MenuItem>
          </NavLink>
          <MenuDivider />

          <MenuItem icon={<StarIcon />}>Recommend this app</MenuItem>
          <MenuItem icon={<QuestionOutlineIcon />}>Help</MenuItem>
          <MenuDivider />
          <MenuItem icon={<LockIcon />} onClick={logout}>Log out</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
function MenuDrop2(props) {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} bg="white" color="black">
          {props.icon}
        </MenuButton>
        <MenuList w="14" h="68">
          <MenuItem>No Notification</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
function MenuDrop3(props) {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} bg="white" color="black">
          {props.icon}
        </MenuButton>
        <MenuList w="14" h="62">
          <Input
            focusBorderColor="orange.400"
            variant="filled"
            placeholder="Search"
            size="md"
          />
        </MenuList>
      </Menu>
    </div>
  );
}

function MenuDrop4(props) {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} bg="white" color="black">
          {props.icon}
        </MenuButton>
        <MenuList w="14" h="260">
          <ModalN1>Invite members</ModalN1>

          <MenuDivider />

          <ModalN2>Add task </ModalN2>

          <MenuDivider />
          <MenuItem>Add project</MenuItem>
          <MenuItem>Add organisation</MenuItem>
          <MenuDivider />
          <MenuItem command="?">Add smart folder</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export { MenuDrop1, MenuDrop2, MenuDrop3, MenuDrop4 };

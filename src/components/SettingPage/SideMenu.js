import React from "react";
import { Box, Center, Flex, Text, Square, Heading } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function SideMenu(props) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className="icona">
        <Avatar
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
          bg="green.300"
          size="md"
        />
      </div>

      <div className="heading">
        <Heading as="h1" size="4xl" fontWeight="light">
          Setting
        </Heading>
      </div>
      <div className="main-menu">
        <ul>
          <li>
            <NavLink
              to="/setting/general"
              className="menu-item"
              onClick={() => setOpen(false)}
            >
              General
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main-menu">
        <ul>
          <li>
            <NavLink
              to="/setting/app"
              className="menu-item"
              onClick={() => setOpen(false)}
            >
              App
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main-menu">
        <ul>
          <li>
            <NavLink
              to="/setting/subscription"
              className="menu-item"
              onClick={() => setOpen(false)}
            >
              Subscriptions
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main-menu">
        <SubMenu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

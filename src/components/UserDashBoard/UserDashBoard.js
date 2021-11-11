import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";
  import React,{useState} from "react";
  import { Box, Input } from "@chakra-ui/react";
  import { Button } from "@chakra-ui/react";
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
  import { FcGoogle } from "react-icons/fc";
  import { IoLogoLinkedin } from "react-icons/io";
  import { Center, Flex, Text } from "@chakra-ui/layout";
  import SideMenu from "../SettingPage/SideMenu";
  import General from "../SettingPage/General";
  import { AuthorizedApp } from "../SettingPage/Subscription";
  import Subscription from "../SettingPage/Subscription";
  import Bascis from "../SettingPage/Basics";
  import ReminderForm from "../SettingPage/ReminderForm";
  import EmailNotification from "../SettingPage/EmailNotification";
  import ProjectPreference from "../SettingPage/ProjectPreference";
  import { Advanced } from "../SettingPage/ProjectPreference";
  import Head from "../../Head";
  // eslint-disable-next-line
  import {  FormControl,  FormLabel,  FormErrorMessage,  FormHelperText,} from "@chakra-ui/react";
  const googleOAuth = require('../../utils/googleOAuth');
  const Axios = require('axios');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': process.env.GOOGLE_CLIENT_SECRET
  }
  let name =""
export default function UserDashBoard() {

   function initFn(){
    const token = localStorage.getItem("token")
     name = localStorage.getItem("name")
  }
  initFn();
    return (
      <div className="App">
      <Router>
        <Route path="/" exact component={Head}></Route>

        <Route path="/setting">
          <Flex color="white">
            <Center w="1000px" bg="black">
              <SideMenu />
            </Center>
            <Center w="1500px" h="1000px" bg="white.500">
              <box>
                <Redirect from="/setting" to="setting/basics" />
                <Route path="/setting/general" component={General}></Route>
                <Route path="/setting/app" component={AuthorizedApp}></Route>
                <Route
                  path="/setting/subscription"
                  component={Subscription}
                ></Route>
                <Route path="/setting/basics" component={Bascis}></Route>
                <Route
                  path="/setting/reminder"
                  component={ReminderForm}
                ></Route>
                <Route
                  path="/setting/emailnotification"
                  component={EmailNotification}
                ></Route>
                <Route
                  path="/setting/project-preference"
                  component={ProjectPreference}
                ></Route>
                <Route path="/setting/advanced" component={Advanced}></Route>
              </box>
            </Center>
            <Center w="600px" bg="white">
              <Text>Box 2</Text>
            </Center>
          </Flex>
        </Route>
      </Router>
    </div>
    )
}

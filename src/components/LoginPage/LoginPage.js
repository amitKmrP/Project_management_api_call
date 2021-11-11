import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import React,{useState} from "react";
import "./LoginPage.css";
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
import UserDashBoard from "../UserDashBoard/UserDashBoard"
// eslint-disable-next-line
import {  FormControl,  FormLabel,  FormErrorMessage,  FormHelperText,} from "@chakra-ui/react";
const googleOAuth = require('../../utils/googleOAuth');

const Axios = require('axios');
let name

const data = {
  "password":"Amit*paswan1",
  "email" : "amit123@gmail.com",
  "name":"amit"
}
const headers = {
  'Content-Type': 'application/json',
  'Authorization': process.env.GOOGLE_CLIENT_SECRET
}
let loginSuccess = false

export default class LoginPage extends React.Component{
  constructor(){
      super()
      let loggedIn = false
      let tokenVal = ""
      const token = localStorage.getItem("token")
      const name = localStorage.getItem("name")
      console.log(name)
      if(token) loggedIn = true
        if (token){
            tokenVal = name
        }
      this.state = {
          username: "",
          password: "",
          loggedIn,
          error: "",
          tokenVal
      }
      this.onChange =  this.onChange.bind(this)
      this.formSubmit = this.formSubmit.bind(this)
  }

  onChange(ev){
      this.setState({
          [ev.target.name]: ev.target.value
      })
  }

  async formSubmit(ev){
      ev.preventDefault()
      const {username, password} = this.state
      console.log(username)
     const  usrData = {
      "password":password,
      "email" : username
    }
      try {
          this.token = await Axios.post("http://localhost:8000/users/login", usrData, {headers: headers})
          localStorage.setItem("token", this.token)
          localStorage.setItem("name", this.token.data.user.name)
          console.log(this.token.data.user.name)

          this.setState({
            loggedIn: true,
            tokenVal: this.token.data.user.name
          })
      } catch (err) {
          this.setState({
              error: err.message
          })
      }
  }

  render()
  {
      if(this.state.loggedIn === true){
          return ( <UserDashBoard  /> );
      }
      return(
            <Box
      className="login-container"
      bg="#eaeaec"
      w="100%"
      h="100vh"
      p={4}
      color="black"
    >
      <Tabs variant="unstyled" align="center" className="navigation-container">
        <div>Logo</div>
        <TabList mb="40px" m="40px">
          <Tab>Login</Tab>
          <Tab>Signup</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="username" value={this.state.username} onChange={this.onChange} name="username"  />
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="password" value={this.state.password} onChange={this.onChange} name="password" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <div>
              <Button
              onClick = {this.formSubmit}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                colorScheme="teal"
                size="lg"
                bg="black"
              >
                Login
              </Button>
            </div>
            <div>
              <Button
                leftIcon={<FcGoogle />}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                bg="alphaBlack"
                border="solid gray 1px"
                size="lg"
                fontWeight="light"
                borderRadius="8px"
              >
                Signin with Google
              </Button>
            </div>
            <div>
              <Button
                leftIcon={<IoLogoLinkedin />}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                bg="alphaBlack"
                border="solid gray 1px"
                size="lg"
                mb="20px"
                fontWeight="light"
                borderRadius="8px"
              >
                Sign in with Linkedin
              </Button>
            </div>
            <div style={{ color: "gray" }}>
              Forgot password?{" "}
              <strong style={{ color: "black" }}>click here</strong>
            </div>
          </TabPanel>

          <TabPanel>
            <div>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            </div>

            <Button
              w="100%"
              my="5px"
              pr="60px"
              pl="60px"
              colorScheme="white"
              size="lg"
              bg="black"
              borderRadius="8px"
            >
              Next
            </Button>
            <div style={{ margin: "5px", color: "gray" }}>or</div>
            <div>
              <Button
                leftIcon={<FcGoogle />}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                bg="alphaBlack"
                border="solid gray 1px"
                size="lg"
                fontWeight="light"
                borderRadius="8px"
              >
                Signin with Google
              </Button>
            </div>
            <div>
              <Button
                leftIcon={<IoLogoLinkedin />}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                bg="alphaBlack"
                border="solid gray 1px"
                size="lg"
                mb="20px"
                fontWeight="light"
                borderRadius="8px"
              >
                Sign in with Linkedin
              </Button>
            </div>
            <div style={{ color: "gray" }}>
              Already have an account?{" "}
              <strong style={{ color: "black" }}>Log in here</strong>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
      );  
  }
}
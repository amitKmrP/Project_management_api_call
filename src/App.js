import Head from "./Head";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Center, Flex, Text } from "@chakra-ui/layout";
import SideMenu from "./components/SettingPage/SideMenu";
import General from "./components/SettingPage/General";
import { AuthorizedApp } from "./components/SettingPage/Subscription";
import Subscription from "./components/SettingPage/Subscription";
import Bascis from "./components/SettingPage/Basics";
import ReminderForm from "./components/SettingPage/ReminderForm";
import EmailNotification from "./components/SettingPage/EmailNotification";
import ProjectPreference from "./components/SettingPage/ProjectPreference";
import { Advanced } from "./components/SettingPage/ProjectPreference";
import LoginPage from './components/LoginPage/LoginPage'

function App() {


    return(
      <div className = "App">
      <LoginPage />
      </div>
    )
 
}

export default App;

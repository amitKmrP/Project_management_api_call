import React from "react";
import { NavLink } from "react-router-dom";
export default function SubMenu(props) {
  const { open, setOpen } = props;

  return (
    <div>
      <ul>
        <li>
          <a
            onClick={() => setOpen(!open)}
            className={`menu-item ${open ? "active" : ""}`}
          >
            Option
          </a>
          <ul className={`sub-menu ${open ? "active" : ""}`}>
            <li>
              <NavLink to="/setting/basics">Basics</NavLink>
            </li>
            <li>
              <NavLink to="/setting/reminder">Reminders</NavLink>
            </li>
            <li>
              <NavLink to="/setting/emailnotification">
                Email Notifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/setting/project-preference">
                Project Preferences
              </NavLink>
            </li>
            <li>
              <NavLink to="/setting/advanced">Advanced</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

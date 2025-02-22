import React from 'react'
import {  NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-around">
          <NavLink to="/" className="hover:text-blue-400">Dashboard</NavLink>
          <NavLink to="/schedule" className="hover:text-blue-400">Study Schedule</NavLink>
          <NavLink to="/assignments" className="hover:text-blue-400">Assignments</NavLink>
          <NavLink to="/notes" className="hover:text-blue-400">Notes</NavLink>
          <NavLink to="/reminders" className="hover:text-blue-400">Reminders</NavLink>
        </nav>
      );
}

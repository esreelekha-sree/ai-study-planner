import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";



const App = () => {

  return (
    <Router>
      <Navigation />
      <div className="container mx-auto py-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<h2 className='text-center text-xl'>Study Schedule Page</h2>} />
          <Route path="/assignments" element={<h2 className='text-center text-xl'>Assignments Page</h2>} />
          <Route path="/notes" element={<h2 className='text-center text-xl'>Notes Page</h2>} />
          <Route path="/reminders" element={<h2 className='text-center text-xl'>Reminders Page</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

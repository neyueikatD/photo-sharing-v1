import './App.css';

import React from "react";
// import { Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

const App = (props) => {
  return (
    <Router>
      <div className="app-container">
        <div className="grid-container">
          <div className="topbar">
            <TopBar />
          </div>
          <div className="sidebar">
            <UserList />
          </div>
          <div className="content">
            <Routes>
              <Route path="/users/:userId" element={<UserDetail />} />
              <Route path="/photos/:userId" element={<UserPhotos />} />
              <Route path="/users" element={<UserList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

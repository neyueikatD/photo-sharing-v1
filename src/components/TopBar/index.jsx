import React from "react";
// import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';
import models from '../../modelData/models';

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {
  const location = useLocation();
  let context = '';
  
  // Xác định ngữ cảnh dựa trên route hiện tại
  if (location.pathname.includes('/users/')) {
    const userId = location.pathname.split('/')[2];
    const user = models.userModel(userId);
    context = `${user.first_name} ${user.last_name}`;
  } else if (location.pathname.includes('/photos/')) {
    const userId = location.pathname.split('/')[2];
    const user = models.userModel(userId);
    context = `Photos of ${user.first_name} ${user.last_name}`;
  } else if (location.pathname === '/users') {
    context = 'User List';
  }
    return (
      // <AppBar className="topbar-appBar" position="absolute">
      //   <Toolbar>
      //     <Typography variant="h5" color="inherit">
      //       This is the TopBar component
      //     </Typography>
      //   </Toolbar>
      // </AppBar>
      <div className="top-bar">
        <div className="top-bar-left">Tạ Kiều Yến</div>
        <div className={`top-bar-right ${context ? 'context-fade' : ''}`}>
          {context || 'Photo Sharing App'}
        </div>
      </div>
    );
}

export default TopBar;

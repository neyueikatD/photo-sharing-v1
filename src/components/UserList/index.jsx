import React from "react";
import {
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';
import models from "../../modelData/models";

import "./styles.css";


/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const users = models.userListModel();
  
  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <Typography variant="body1" paragraph>
        This is the user list, which takes up 3/12 of the window. You might
        choose to use <a href="https://mui.com/components/lists/">Lists</a>{" "}
        and <a href="https://mui.com/components/dividers/">Dividers</a> to
        display your users like so:
      </Typography>
      
      <List component="nav" disablePadding dense>
        {users.map((user, index) => (
          <React.Fragment key={user._id}>
            <ListItem className="user-list-item" disableGutters>
              <Link 
                to={`/users/${user._id}`} 
                className="user-list-link"
              >
                {user.first_name} {user.last_name}
              </Link>
            </ListItem>
            {index < users.length - 1 && <Divider className="user-list-divider" />}
          </React.Fragment>
        ))}
      </List>
      
      <Typography variant="body2" className="user-list-footer">
        The model comes in from models.userListModel()
      </Typography>
    </div>
  );
}

export default UserList;
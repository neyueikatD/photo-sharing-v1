import React from "react";
// import {Typography} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const {userId} = useParams();
    const user = models.userModel(userId);
    return (
        <>
          {/* <Typography variant="body1">
            This should be the UserDetail view of the PhotoShare app. Since it is
            invoked from React Router the params from the route will be in property match.
            So this should show details of user: {user.userId}.
            You can fetch the model for the user from models.userModel.
          </Typography> */}
          <div className="user-detail-container">
            <h1 className="user-detail-title">{user.first_name} {user.last_name}</h1>
            <p className="user-detail-info"><strong style={{ fontWeight: 600 }}>Location:</strong> {user.location}</p> {/*các style mặc định có thể ghi đè thẻ <strong> */}
            <p className="user-detail-info"><strong style={{ fontWeight: 600 }}>Occupation:</strong> {user.occupation}</p>
            <p className="user-detail-info"><strong style={{ fontWeight: 600 }}>Description:</strong> {user.description}</p>
            <Link to={`/photos/${user._id}`} className="view-photos-link">View Photos</Link>
          </div>
        </>
    );
}

export default UserDetail;

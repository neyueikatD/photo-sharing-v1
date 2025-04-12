/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import { Typography } from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
const imageContext = require.context('../../images', false, /\.(jpg|jpeg|png)$/);

function UserPhotos() {
  const { userId } = useParams();
  
  const photos = React.useMemo(() => {
    try {
      const data = models.photoOfUserModel(userId);
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error loading photos:', error);
      return [];
    }
  }, [userId]);

  if (!photos || !Array.isArray(photos)) {
    return <div className="loading-message">Loading photos or no photos available...</div>;
  }

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleString();
    } catch {
      return 'Unknown date';
    }
  };
  
  return (
      // <Typography variant="body1">
      //   This should be the UserPhotos view of the PhotoShare app. Since it is
      //   invoked from React Router the params from the route will be in property
      //   match. So this should show details of user:
      //   {user.userId}. You can fetch the model for the user
      //   from models.photoOfUserModel(userId):
      // </Typography>
      <div className="photos-page">
      {photos.length === 0 ? (
        <p className="no-photos-message">This user has no photos yet.</p>
      ) : (
        photos.map((photo) => {
          if (!photo || !photo._id || !photo.file_name) return null;
          
          return (
            <div key={photo._id} className="photo-container">
              <div className="photo-wrapper">
              <img 
                src={imageContext(`./${photo.file_name}`)} 
                alt={`Photo by user ${userId}`} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/default.png'; 
                }}
              />
              </div>
              
              <div className="photo-meta">
                <p className="photo-date">
                  Posted on: {formatDate(photo.date_time)}
                </p>
                
                {photo.comments?.length > 0 ? (
                  <div className="comments-section">
                    <h3 className="comments-title">Comments:</h3>
                    <div className="comments-list">
                      {photo.comments.map((comment) => (
                        <div key={comment._id} className="comment-item">
                          <Link 
                            to={`/users/${comment.user?._id}`}
                            className="comment-author"
                          >
                            {comment.user?.first_name} {comment.user?.last_name}
                          </Link>
                          <p className="comment-date">
                            {formatDate(comment.date_time)}
                          </p>
                          <p className="comment-text">
                            {comment.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="comments-section">
                    <p className="no-comments">No comments yet.</p>
                  </div>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default UserPhotos;

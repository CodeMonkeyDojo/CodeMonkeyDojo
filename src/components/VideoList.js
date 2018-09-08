// this component should display a list of videos from YouTube that are
// relevant to our tutorial, they should be clickable so they can be displayed
// on the videoPlayer component

// I can optimize the search terms for the tutorials so that they display
// the most relevant YouTube videos

// the tutorial table should hold the keyword information for our search
// functionality that will be displayed in the video list

import React, { Component } from 'react';
import './App.css';

var VideoList = ({ videos, handleVideoListEntryClick}) => {
  <div className="videoList">
    {videos.map((video) => (
      <VideoListEntry
        video={video}
        key={video.id.videoId}
        handleVideoListEntryClick={handleVideoListEntryClick}
      />
      )
    )}
  </div>
};

export default VideoList;

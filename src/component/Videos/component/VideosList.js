import React, { Component } from "react";
import VideoItem from "./VideoItem";

function VideosList({ videos, onVideoSelect }) {
  const renderedList = videos.map((video, idx) => {
    return <VideoItem key={idx} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideosList;

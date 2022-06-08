import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({ videos, videoSelect }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map(video => (
        <VideoItem videoSelect={videoSelect} video={video} key={video.etag} />
      ))}
    </div>
  );
};

export default VideoList;

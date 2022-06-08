import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youtube from './apis/youtube';
const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onTermSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };
  const videoSelect = video => {
    setSelectedVideo(video);
  };
  useEffect(() => {
    onTermSubmit('react js hiring');
  }, []);
  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} videoSelect={videoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

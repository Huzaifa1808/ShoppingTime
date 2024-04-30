// FullVideo.js

import React from 'react';


function FullVideo() {
  return (
    <div className="full-video">
      <video autoPlay loop muted>
        <source src="https://shopping-time.vercel.app/static/media/hero-video.a8516bc4ec2940361551.mp4" type="video/mp4" />
      
      </video>
      <div className="video-text">
      <span className="black">Building A Better </span> <span className="red">You !</span> 
         </div>

    </div>
  );
}

export default FullVideo;


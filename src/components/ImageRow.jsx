// ImageRow.js

import React from 'react';


function ImageRow({ image1Src, image2Src }) {
  return (
    <div className="image-row">
      {/* <img className="image1" src={image1Src} alt="Image 1" /> */}
      <div className="image-container">
        <img src={image1Src} alt="Image 1" className="image" />
        <button className="button">Button 1</button>
      </div>
      {/* <img className="image2" src={image2Src} alt="Image 2" /> */}
      <div className="image-container">
        <img src={image2Src} alt="Image 2" className="image" />
        <button className="button">Button 2</button>
      </div>
      
    </div>
  );
}

export default ImageRow;

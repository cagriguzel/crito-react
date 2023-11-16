import React, { useState } from 'react';

const VideoModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/G7KNmW9a75Y"
          title="Intro Video"
          allowFullScreen
        ></iframe>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VideoModal;

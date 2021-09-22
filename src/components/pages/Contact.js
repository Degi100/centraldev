import React from "react";
import "./Main.scss";
import { Player } from 'video-react';

export const Contact = () => {
  return (
      <div className="layer-headline">
        <h1>Contact</h1>
        <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      
    />
      </div>
  );
};

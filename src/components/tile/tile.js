import React from 'react';
import LocationIcon from '../../assets/location-icon';
import './tile.scss';

const Tile = ({ title, img, location }) => (
  <div className="tile">
    <div className="image" style={{backgroundImage: `url(${img})`}} />
    <div className="tile-details">
      <div className="title"><strong>{title}</strong></div>
      <div className="location"><LocationIcon /><span>{location}</span></div>
    </div>
  </div>
);

export default Tile;
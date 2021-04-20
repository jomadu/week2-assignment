import React from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

function Avatar({ image, isMediumMember }) {
  return (
    <div className="avatar">
      <img className="avatar-image" src={image} alt="Avatar" />
    </div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string,
  isMediumMember: PropTypes.bool,
};

export default Avatar;

import React from "react";
import PropTypes from "prop-types";
import "../Layout.css";
import VolumeDownOutlinedIcon from "@material-ui/icons/VolumeDownOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function ArticleContentHeader(props) {
  let header = null;
  if (props.hasAudioAvailable && props.memberPreview) {
    header = (
      <div className="display-flex flex-direction-row align-items-center">
        <VolumeDownOutlinedIcon />
        <p className="flex-grow-2">Audio Available</p>
        <StarBorderIcon />
      </div>
    );
  } else if (props.hasAudioAvailable) {
    header = (
      <div className="display-flex flex-direction-row align-items-center">
        <VolumeDownOutlinedIcon />
        <p className="flex-grow-2">Audio Available</p>
      </div>
    );
  } else if (props.memberPreview) {
    header = (
      <div className="display-flex flex-direction-row align-items-center">
        <StarBorderIcon />
        <p className="flex-grow-2">Member Preview</p>
      </div>
    );
  }
  return header;
}

ArticleContentHeader.propTypes = {
  hasAudioAvailable: PropTypes.bool,
  memberPreview: PropTypes.bool,
};

export default ArticleContentHeader;

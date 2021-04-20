import React from "react";
import PropTypes from "prop-types";
import "./ArticleMedia.css";

function ArticleMedia(props) {
  return (
    <div className="article-media">
      <img className="article-media-image" src={props.src} alt={props.alt} />
    </div>
  );
}

ArticleMedia.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ArticleMedia;

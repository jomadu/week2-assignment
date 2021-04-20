import React from "react";
import PropTypes from "prop-types";
import ArticleContentHeader from "../ArticleContentHeader/ArticleContentHeader";
import ArticleContentFooter from "../ArticleContentFooter/ArticleContentFooter";
import "./ArticleContent.css";
import "../Layout.css";

function ArticleContent(props) {
  return (
    <div className="article-content display-flex flex-direction-column">
      <ArticleContentHeader
        hasAudioAvailable={props.hasAudioAvailable}
        memberPreview={props.memberPreview}
      />
      <h2>{props.title}</h2>
      <p className="flex-grow-2">{props.description}</p>
      <ArticleContentFooter
        author={props.author}
        postedDate={props.postedDate}
        minutesToRead={props.minutesToRead}
      />
    </div>
  );
}

ArticleContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    isMediumMember: PropTypes.bool,
  }),
  postedDate: PropTypes.string,
  minutesToRead: PropTypes.number,
  hasAudioAvailable: PropTypes.bool,
  memberPreview: PropTypes.bool,
};

export default ArticleContent;

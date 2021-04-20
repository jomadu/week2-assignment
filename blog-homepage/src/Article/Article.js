import React from "react";
import PropTypes from "prop-types";
import "./Article.css";
import "../Layout.css";
import ArticleMedia from "../ArticleMedia/ArticleMedia";
import ArticleContent from "../ArticleContent/ArticleContent";

function Article(props) {
  const article = (
    <div
      className={`article display-flex flex-direction-${props.flexDirection}`}
    >
      <div
        className={`article-media-container-fixed-${
          props.flexDirection === "row" ? "width" : "height"
        }`}
      >
        <ArticleMedia src={props.image} alt="Article Preview" />
      </div>
      <div className="flex-grow-2">
        <ArticleContent
          title={props.title}
          description={props.description}
          link={props.link}
          author={props.author}
          postedDate={props.postedDate}
          minutesToRead={props.minutesToRead}
          hasAudioAvailable={props.hasAudioAvailable}
          memberPreview={props.memberPreview}
        />
      </div>
    </div>
  );

  return <div>{article}</div>;
}

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
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
  flexDirection: PropTypes.oneOf(["row", "column"]).isRequired,
};

export default Article;

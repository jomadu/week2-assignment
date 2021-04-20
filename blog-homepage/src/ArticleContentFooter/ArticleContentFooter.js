import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";
import "./ArticleContentFooter.css";
import "../Layout.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function ArticleContentFooter(props) {
  return (
    <div className="article-content-footer display-flex flex-direction-row">
      <div className="article-content-footer-avatar-container">
        <Avatar
          image={props.author.image}
          isMediumMember={props.author.isMediumMember}
        />
      </div>
      <div className="display-flex flex-direction-column flex-grow-2">
        <p>{props.author.name}</p>
        <p>
          {props.postedDate} - {props.minutesToRead} min read
        </p>
      </div>
      <BookmarkBorderIcon />
    </div>
  );
}

ArticleContentFooter.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    isMediumMember: PropTypes.bool,
  }),
  postedDate: PropTypes.string,
  minutesToRead: PropTypes.number,
};

export default ArticleContentFooter;

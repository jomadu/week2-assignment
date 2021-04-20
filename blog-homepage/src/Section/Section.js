import React from "react";
import PropTypes from "prop-types";

function Section(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pdf from '../../images/resume.pdf';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/joshhaws" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshhaws" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:joshhaws0@gmail.com?Subject=Hello" target="_top" style={ { color: colorPrimary } }><i className="fa fa-envelope"></i></a>
      <a href={pdf} style={ { color: colorPrimary } }><i className="fa fa-file"></i></a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block.js';
import ContactBlock from '../ContactBlock.js';

const socialData = {
  email: {
    class: "fa fa-envelope",
    url: "mailto:"
  },
  facebook: {
    class: "fa fa-facebook",
    url: "https://www.facebook.com/"
  },
  twitter: {
    class: "fa fa-twitter",
    url: "http://twitter.com/"
  },
  linkedin: {
    class: "fa fa-linkedin",
    url: "https://www.linkedin.com/in/"
  },
  youtube: {
    class: "fa fa-youtube",
    url: "https://www.youtube.com/channel/"
  },
  instagram: {
    class: "fa fa-instagram",
    url: "https://www.instagram.com/"
  },
  pinterest: {
    class: "fa fa-pinterest",
    url: "https://www.pinterest.com/"
  },
  snapchat: {
    class: "fa fa-snapchat-ghost",
    url: "https://www.snapchat.com/add/"
  },
}

const SocialIcon = props => {

  const { dest, platform, blockClass, handle } = props;

  const ref = dest || `${socialData[platform].url}${handle}`;

  return (
    <a 
      href={ ref }
      className={ `socialIcon ${socialData[platform].class} ${blockClass}` }
      />
  );
}


export default SocialIcon;

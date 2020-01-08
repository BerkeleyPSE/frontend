import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block.js';
import ContactBlock from '../ContactBlock.js';
import { Helmet } from "react-helmet";

const socialClasses = {
  facebook: "fa fa-facebook",
  twitter: "fa fa-twitter",
  google: "fa fa-google",
  linkedin: "fa fa-linkedin",
  youtube: "fa fa-youtube",
  instagram: "fa fa-instagram",
  pinterest: "fa fa-pinterest",
  snapchat: "fa fa-snapchat-ghost"
}

const Footer = props => {

  const { title, social, theme="secondary"  } = props;

  return (
    <Block theme={theme} className="footer">
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Helmet>
      <div className="col-12 mb-4">
        { 
          social && social.ids &&
            social.ids.map(platform => <a 
              href={ social.data[platform] }
              className={ socialClasses[platform] + " mx-4" }
              />
            )
        }
      </div>
      <div className="col-12">
        <p>
          © 2019 — Pi Sigma Epsilon | UC Berkeley Zeta Chi Chapter
        </p>
      </div>
    </Block>
  );
}


export default Footer;

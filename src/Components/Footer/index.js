import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block.js';
import ContactBlock from '../ContactBlock.js';
import SocialIcon from '../SocialIcon';

const Footer = props => {

  const { title, social, theme="secondary"  } = props;

  return (
    <Block theme={theme} className="footer">
      <div className="col-12 mb-4">
        { 
          social && social.ids &&
            social.ids.map(platform => <SocialIcon
              dest={ social.data[platform] }
              platform={ platform }
              blockClass="mx-4"
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

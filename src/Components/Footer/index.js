import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block';
import ContactBlock from '../ContactBlock.js';
import SocialIcon from '../SocialIcon';

const Footer = props => {

  const { title, social, theme="secondary"  } = props;

  return (
    <Block theme={theme} className="footer" small>
      <div className="col-12 my-4">
        { 
          social && social.ids &&
            social.ids.map(platform => <SocialIcon
              key={"footer" + platform}
              dest={ social.data[platform] }
              platform={ platform }
              blockClass="mx-3"
              />
            )
        }
      </div>
      <div className="col-12">
        <p>
          © {(new Date()).getFullYear()} — Pi Sigma Epsilon | UC Berkeley Zeta Chi Chapter
        </p>
      </div>
    </Block>
  );
}


export default Footer;

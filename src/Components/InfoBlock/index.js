import React from 'react';
// import './styles.scss';
import '../../custom.scss';
import Block from '../Block.js';
import ContactBlock from '../ContactBlock.js';
import Button from '../Button';


const InfoBlock = props => {

  const { title, body, children, theme="secondary"} = props;

  const spacer = <div className="d-none d-md-block col-1"/>

  return (
    <Block theme={theme} className="letter">
      { spacer }
      <div className="col-12 col-md-10 ">
        <h2>{ title }</h2>
        { 
          body && body.map((paragraph, i) => (
            <p key={`${title}-${i}`}>
              { paragraph }
            </p>
          )) 
        }
      </div>
      { spacer }
    </Block>
  );
}


export default InfoBlock;

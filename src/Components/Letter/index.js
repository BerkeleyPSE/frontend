import React from 'react';
import './styles.scss';
import '../../custom.scss';
import Block from '../Block.js';
import ContactBlock from '../ContactBlock.js';
import Button from '../Button';


const Letter = props => {

  const { greet, body, signiture, title, img, children, theme="secondary"} = props;
  const spacer = <div className="d-none d-lg-block col-1"/>;

  return (
    <Block theme={theme} className="letter">
      { spacer }
      <div className="col-12 col-lg-3 text-center mb-5 mb-lg-0">
        <img src={img} />
      </div>
      <div className={"col-12 col-lg-7 text-left "}>
        <p>{ greet }</p>
        { 
          body && body.map((paragraph, i) => (
            <p key={`${title}-${i}`}>
              { paragraph }
            </p>
          )) 
        }
        <p className="text-right" style={{marginBottom: "0px"}}>{ signiture }</p>
        <p className="text-right">{ title }</p>
      </div>
      { spacer }
    </Block>
  );
}


export default Letter;

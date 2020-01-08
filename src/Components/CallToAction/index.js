import React from 'react';
import '../../custom.scss';
import Block from '../Block.js';
import ContactBlock from '../ContactBlock.js';
import Button from '../Button';


const genImg = img => (
  <div className="col-12 my-4">
    <img src={ img } />
  </div>
);

const genText = (title) => (
  <div className="col-12 pt-5 text-center">
    <h3> { title } </h3>
  </div>
);

const genButton = (button, buttonDest, buttonExternal) => (
  <div className="col-12 text-center">
    <Button title={ button } dest={ buttonDest } external={ buttonExternal } />
  </div>
);


const CallToAction = props => {

  const {title, button, buttonDest, buttonExternal, img, children, theme="secondary"} = props;

  return (
    <Block theme={theme} className="callToAction">
      { img && genImg(img)}
      { title && genText(title) }
      { button && genButton(button, buttonDest, buttonExternal) }
      <div className="col-12 mb-5">{ children }</div>
    </Block>
  );
}


export default CallToAction;

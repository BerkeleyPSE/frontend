import React from 'react';
import './styles.scss';
import { Parallax, Background } from 'react-parallax';


const Block = props => {
  const { small, smaller, theme, height, img, className, children } = props;
  const style = {}
  if (height) {
    style.height = height;
  }

  if (img) {
    style.backgroundColor = "transparent" ;
    return (
        <Parallax
          className=""
          bgImage={img}
          strength={500}
          style={{marginRight: "-15px", marginLeft: "-15px"}}
          >
          <div 
            className={`block row ${small ? "py-3" : ""} px-3 px-md-5 ${theme} ${className}`} 
            style={ style }
            >
            {children}
          </div>
        </Parallax>
      );
  }

  return (
    <div 
      className={`block row ${small ? "py-3" : ""} px-3 px-md-5 ${theme} ${className}`} 
      style={ style }
      >
      {children}
    </div>
  );
}


export default Block;

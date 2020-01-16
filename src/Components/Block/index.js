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
    if (window.innerWidth > 1100) {
      return (
        <Parallax
          className=""
          bgImage={img}
          strength={250}
          style={{marginRight: "-15px", marginLeft: "-15px"}}
          >
          <div 
            className={`block row ${small ? "py-3" : ""} px-3 px-md-5 ${theme} ${className}`} 
            style={ style }
            >
            {children}
          </div>
        </Parallax>
      )
    } else if (window.innerWidth > 768) {
      return (
        <Parallax
          className=""
          bgImage={img}
          strength={150}
          style={{marginRight: "-15px", marginLeft: "-15px"}}
          >
          <div 
            className={`block row ${small ? "py-3" : ""} px-3 px-md-5 ${theme} ${className}`} 
            style={ style }
            >
            {children}
          </div>
        </Parallax>
      )
    } else {
      style.backgroundImage = `url(${img})` ;
      style.backgroundSize = "cover";
      style.backgroundPosition = "center";
      style.backgroundRepeat = "no-repeat";
    }
    
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

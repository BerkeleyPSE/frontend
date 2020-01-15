import React from 'react';
import './styles.scss';
import { Parallax } from 'react-scroll-parallax';


const Block = props => {
  const { small, theme, height, img, className, children } = props;
  const style = {}
  if (height) {
    style.height = height;
  }
  if (img) {
    // style.backgroundImage = `url(${img})` ;
    // return (
    //   <div>

    //   <div 
    //     className={`block row ${small ? "py-4" : ""} px-3 px-md-5 ${theme} ${className}`} 
    //     style={ style }
    //     >
    //     <Parallax y={[0, 50]}>
    //     <img className="ptest" src={img}/>
    //     </Parallax>
    //     <Parallax y={[0, 0]}>
    //     {children}
    //     </Parallax>
          
          
        
        
    //   </div>
    //   <div>

    //   </div>
    //   </div>
    // );
  }

  return (
    <div 
      className={`block row ${small ? "py-4" : ""} px-3 px-md-5 ${theme} ${className}`} 
      style={ style }
      >
      {children}
    </div>
  );
}


export default Block;

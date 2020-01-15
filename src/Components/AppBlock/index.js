import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block';
import Button from '../Button';



const AppBlock = props => {

  let { title, blockClass, theme="secondary" } = props;

  return (
    <Block theme={theme} className={`appBlock ${blockClass}`}>
      <div className="col-12 d-flex justify-content-center innerContent">
        <iframe 
          className="iframeContent"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdu8Kfjd7L9sb2ansNfAGQxn3Lcxcq_sgp78iYjYNOd315wYw/viewform?usp=sf_link" 
          width="720" 
          height="3150" 
          frameborder="0" 
          marginHeight="0" 
          marginWidth="0">
          Loading…
        </iframe>      
      </div>
    </Block>
  );
}


export default AppBlock;

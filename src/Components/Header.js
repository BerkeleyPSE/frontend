import React from 'react';
import '../custom.scss';
import Block from './Block.js';
import Button from './Button';



const Header = props => (
  <Block theme={props.theme} height={props.height}>
    <div className="col-12 my-auto">
      <h1 className="mb-0">{props.title}</h1>
      { props.body && <p>{props.body}</p> }
      { props.buttonText && 
        <div className="mt-5"><Button 
          title={ props.buttonText }
          dest={ props.buttonDest }
          >
        </Button></div>
      }
    </div>
  </Block>
)


export default Header;

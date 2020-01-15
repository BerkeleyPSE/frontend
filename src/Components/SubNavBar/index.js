import React from 'react';
import '../../custom.scss';
import './styles.scss';
import {
  Link,
  NavLink
} from "react-router-dom";
import Block from '../Block';

const makeLink = (title, dest, theme) => (
  <div key={title} className="p-2">
    <NavLink to={`${dest}`} className={`navLink ${theme}`} exact activeClassName="active">{title}</NavLink>
  </div>
)

const SubNavBar = props => {
  const { title, data, blockClass="", align, theme} = props;

  const spacer = <div className="d-none d-lg-block col-1"/>;
  var alignName;
  switch(align) {
    case "right":
      alignName="end";
      break;
    case "center":
      alignName="center";
      break;
    case "left":
      alignName="start";
      break;
    default:
      alignName="end";
  };

  return (
    <Block className={`subNavBar ${blockClass}`} theme={theme} >
      { spacer }
      <div className="col-12 col-lg-10 px-0 mx-0">
        <div className={`d-flex flex-row justify-content-${alignName}`}>
          {
            data && data.dataIDs && 
              data.dataIDs.map(id => makeLink(data.data[id].title, data.data[id].dest, theme))
          }
        </div>
      </div>
      { spacer }
    </Block>
  );
}

export default SubNavBar;

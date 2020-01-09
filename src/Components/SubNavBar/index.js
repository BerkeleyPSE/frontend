import React from 'react';
import '../../custom.scss';
import './styles.scss';
import {
  Link,
  NavLink
} from "react-router-dom";
import Block from '../Block.js';

const makeLink = (title, dest, theme) => (
  <div key={title} className="p-2">
    <NavLink to={`${dest}`} className={`navLink ${theme}`} activeClassName="active">{title}</NavLink>
  </div>
)

const SubNavBar = props => {
  const { title, data, blockClass="", theme} = props;

  const spacer = <div className="d-none d-lg-block col-1"/>;

  return (
    <Block className={`subNavBar ${blockClass}`} theme={theme} small >
      { spacer }
      <div className="col-12 col-lg-10 px-0 mx-0">
        <div className="d-flex flex-row justify-content-end">
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

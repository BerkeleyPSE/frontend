import React from 'react';
import '../custom.scss';
import {
  Link,
  NavLink
} from "react-router-dom";
import Block from './Block.js';


const dataTemp = {
  dataIDs: ["home", "about", "brothers", "careers", "apply", "projects", "contact", "login"],
  data: {
    home: {
      title: "HOME",
      dest: "/home"
    },
    about: {
      title: "ABOUT",
      dest: "/about"
    },
    brothers: {
      title: "BROTHERS",
      dest: "/brothers"
    },
    careers: {
      title: "CAREERS",
      dest: "/careers"
    },
    apply: {
      title: "APPLY",
      dest: "/apply"
    },
    projects: {
      title: "PROJECTS",
      dest: "https://www.zc-consulting.org/",
      external: true
    },
    contact: {
      title: "CONTACT",
      dest: "/contact"
    },
    login: {
      title: "LOGIN",
      dest: "/login"
    },
  }
}


const makeLink = (title, dest, theme) => (
  <div key={title} className="p-2">
    <NavLink to={dest} className={`navLink ${theme}`} activeClassName="active">{title}</NavLink>
  </div>
)

const makeExternalLink = (title, dest, theme) => (
  <div key={title} className="p-2">
    <a href={dest} className={`navLink ${theme}`}>{title}</a>
  </div>
)

const NavBar = props => {
  const { title, data=dataTemp, theme} = props;

  return (
    <Block className="navBar" theme={theme} small >
      <div className="col-12 col-md-3 text-center text-md-left">
        <h1 style={{fontSize: "inherit"}}>
          <Link to="/" className={`logo ${theme}`}>{title}</Link>
        </h1>
      </div>
      <div className="col-12 col-md-9">
        <div className="d-flex flex-row justify-content-end">
          {
            data && data.dataIDs && 
              data.dataIDs.map(id => data.data[id].external ?
                makeExternalLink(data.data[id].title, data.data[id].dest, theme) :
                makeLink(data.data[id].title, data.data[id].dest, theme))
          }
        </div>
      </div>
    </Block>
  );
}

export default NavBar;

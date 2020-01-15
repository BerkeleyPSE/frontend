import React from 'react';
import './styles.scss';
import {
  Link,
  NavLink
} from "react-router-dom";
import Block from '../Block';
import crest from './pselogo.png';


const dataTemp = {
  dataIDs: ["home", "about", "brothers", "careers", "rush", /*"app"*/, "projects", "contact",/* "login"*/],
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
    rush: {
      title: "JOIN US",
      dest: "/apply-info"
    },
    app: {
      title: "APP",
      dest: "/apply-app"
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
  const { title, subtitle, data=dataTemp, theme} = props;

  return (
    <Block className="navBar" theme={theme} small >
      <div className="col-12 col-lg-4 text-center text-lg-left">
          <Link to="/" className={`logo ${theme}`}>
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
              <img className="crest" src={crest}/>
              <div className="ml-2 d-flex flex-column">
                <h1 className="title">{title} </h1>
                <p className="subtitle">{subtitle && subtitle.toUpperCase()}</p>
              </div>
            </div>
          </Link>
      </div>
      <div className="col-12 col-lg-8">
        <div className="d-flex flex-row flex-wrap justify-content-center justify-content-lg-end">
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

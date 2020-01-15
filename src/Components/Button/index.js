import React from 'react';
// import '../custom.scss';
import './styles.scss';
import {
  Link
} from "react-router-dom";


const Button = props => {

  var {title, dest=false, onClick=()=>null, external=false} = props;
  title = title.toUpperCase();

  if (external) {
    return <a 
      className="btn px-4 py-2" 
      href={ dest }
      role="button">{title}
      </a>;
  }
  return <Link 
    className="btn px-4 py-2" 
    to={dest || onClick} 
    role="button">{title}
    </Link>;
}


export default Button;

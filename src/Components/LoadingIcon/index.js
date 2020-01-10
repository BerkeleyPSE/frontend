import React from 'react';
// import '../custom.scss';
import './styles.scss';
import {
  Link
} from "react-router-dom";

const LoadingIcon = props => {
  const { customClass } = props;
  return (
    <div className={ `loadingIcon ${customClass}`}>
      <div className="loadingio-spinner-ball-tx4j046cnbi">
        <div className="ldio-481nuhj9x26">
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingIcon;

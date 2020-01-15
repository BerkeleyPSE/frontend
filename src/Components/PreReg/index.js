import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block.js';
import Button from '../Button';



const PreReg = props => {

  let { title, blockClass, theme="secondary" } = props;

  return (
    <Block theme={theme} className={`preReg ${blockClass}`}>
      <div className="col-12 d-flex justify-content-center innerContent">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScTHNzaeMeA6jno1Q7g4l31tUP5A65TIfeRiIYVHd9yclml0w/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        {/*<form 
          action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdIwEISfTusew2kBzTj0Qgf3psKcO94Rglzd-XCMVlrhk0gow/formResponse"
          method="POST"
          target="_blank"
          className="text-left"
          >
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="entry.1695355162"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">test</label>
            <input className="form-control" id="exampleInputPassword1" name="entry.747421018"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button id="12345" type="submit" className="btn btn-primary">Submit</button>
        </form>*/}
      </div>
    </Block>
  );
}


export default PreReg;

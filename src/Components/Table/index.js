import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block.js';
import Button from '../Button';
import LoadingIcon from '../LoadingIcon'

const genRow = (attriutes, i) => (
  <div key={ attriutes[0] } className={`col-12 py-2 entry ${i==0 && 'first'}`}>
    <div className="row text-left inner">
      { 
        attriutes.map((val, i) =>
          <div key={ `${attriutes[0]}-${i}` } className="col d-flex align-items-center">
            <p className="ml-2">{ val }</p>
          </div>
        ) 
      }
    </div>
  </div>
);

const genSectionHeader = title =>
  <div key={ title } className="col-12 py-2 header">
    <div className="row text-left">
      <p className="col-12 ml-2">{title.toUpperCase()}</p>
    </div>
  </div>;

const Table = props => {
  const {title, labels=[], ids=[], data, buttonText, buttonDest, blockClass="",theme="seconrdary"} = props;

  const spacer = <div className="d-none d-lg-block col-1"/>;

  const titleComponent = title && 
    <div className="col-12 mb-0 text-left title">
      <h2 >{ title }</h2>
      <div className="decoration"/>
    </div>;

  const buttonComponent = buttonText && 
    <div className="col-12 my-3">
      <Button
        title={ buttonText }
        dest={ buttonDest }
        />
    </div>;

  const dataPresent = (ids && ids.length > 0);

  return (
    <Block theme={theme} className={`tableBlock ${blockClass}`}>
      { spacer }
      <div className="col-12 col-lg-10">
        <div className="row">
          { titleComponent }
          { !dataPresent && <LoadingIcon customClass="col p-3" /> }
          <div className="col-12 mt-4 labels">
            <div className="row text-left">
              { 
                dataPresent && labels.map(val =>
                  <div key={ val } className="col">
                    <h4 className="ml-2 pb-2">{ val.toUpperCase() }</h4>
                  </div>
                ) 
              }
            </div>
          </div>
          { ids.map(id => [genSectionHeader(id), ...data[id].map(genRow)]) }
          { buttonComponent }
        </div>
      </div>
      { spacer }
    </Block>
  );
}


export default Table;

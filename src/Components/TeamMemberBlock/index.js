import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block';
import Button from '../Button';
import LoadingIcon from '../LoadingIcon'
import SocialIcon from '../SocialIcon'

const checkEmpty = val => typeof(val) == "object" ? !!val.length : !!val;

const genRow = (label, value) => checkEmpty(value) && label != "Year" &&
  <div className="row entry py-1 mx-0 px-0">
    <div className="col-6 attr d-flex align-items-center mx-0 px-0"><h4>{ label.toUpperCase() }</h4></div>
    <div className="col-6 val d-flex align-items-center">
      <p>
        { typeof(value) == "object" ? value.join(', ') : value }
      </p>
    </div>
  </div>;

const TeamMemberBlock = props => {

  let { data, attributes, blockClass="", theme } = props;
  const spacer = <div className="d-none d-lg-block col-1"/>

  const headerComponent = data && data.name && 
    <div className="d-flex flex-wrap align-items-baseline">
      <h2 className="mb-0">{ data.name }</h2>
      <div className="spacer"/>
      <h4>{ data.position }</h4>
    </div>;

  return (
    <Block theme={theme} className={`teamMemberBlock ${blockClass}`} >
      { spacer }
      <div className="col-12 col-lg-10">
        <div className="text-left mb-4 title">
          { headerComponent }
        </div>
        {
          data && data.key ?
            <div className="row mb-4">
              <div className="col-12 col-md-5 text-center text-md-left mb-4 mb-md-0">
                <img src={`https://res.cloudinary.com/berkeleypse-tech/image/upload/v1579654008/brothers/${data.key}.png`}/>
              </div>
              <div className="col-12 col-md-7">
                <div className="row text-left content">
                  <div className="col-12 mb-4">
                    { attributes.map(attrObj => genRow(attrObj.title, data[attrObj.key]) ) }
                  </div>
                  <div className="col-12">
                    <p>{data.bio}</p>
                  </div>
                </div>
              </div>
            </div> :
            <LoadingIcon />
        }
        <div className="row d-flex justify-content-center">
          { data && data.mediaUrls && Object.keys(data.mediaUrls).map(platform => 
              <SocialIcon 
                platform={ platform }
                handle={ data.mediaUrls[platform] }
                blockClass="icon d-flex justify-content-center align-items-center"
                />) }
        </div>
      </div>
      { spacer }
    </Block>
  );
}


export default TeamMemberBlock;

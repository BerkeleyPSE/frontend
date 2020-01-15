import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block';
import Button from '../Button';


const dataValues = {
  dataIDs: ["bros", "prof", "cur"],
  data: {
    bros: {
      key: "Brotherhood",
      value: "our bros love eachother so much, many of them end up dating each other!",
      img: "https://drive.google.com/uc?export=view&id=1-sSqxZIMkYWO9kS5KJ4HIUjTpoKjYw-K"
    },
    prof: {
      key: "Professionalism",
      value: "Through exclusive infosessions and workshops, we provide endless opportunities for our brothers to continue to develop professionally. Brothers also have the opportunity to gain invaluable experience through real-world client work with ZC Consulting.",
      img: "https://drive.google.com/uc?export=view&id=1-sSqxZIMkYWO9kS5KJ4HIUjTpoKjYw-K"
    },
    cur: {
      key: "Curiosity",
      value: "jk we're not v curious people",
      img: "https://drive.google.com/uc?export=view&id=1-sSqxZIMkYWO9kS5KJ4HIUjTpoKjYw-K"
    }
  }
}

// const keyValueMap = (key, value) => (
//   <div key={key} className="row py-5" style={{borderStyle: "solid", borderWidth: "0 0 1px 0"}}>
//     <div className="col-12 col-md-3 text-left">
//       <h4>{key}</h4>
//     </div>
//     <div className="col-12 col-md-2 text-left"></div>
//     <div className="col-12 col-md-7 text-left">
//       <p>{value}</p>
//     </div>
//   </div>
// )

const keyValueImgMap = data => (
  <div key={data.key} className="col py-3 keyValueImg">
    <div className="row mx-auto">
      <div className="col-12 mb-4 img">
        <img src={ data.img }/>
      </div>
      <div className="col-12">
        <h3>{ data.key }</h3>
      </div>
      <div className="col-12">
        <p>{ data.value }</p>
      </div>
    </div>
  </div>
)


const ListBlock = props => {

  const {title, dataSource, maxLength=false, maxLengthLink=false, buttonText, buttonDest, theme=
    "seconrdary"} = props;

  var dataMap;
  var data;

  switch(dataSource) {
    case "values":
      data = dataValues;
      dataMap = keyValueImgMap;
      break;

    default:
      data = false;
  }

  return (
    <Block theme={theme} className="listBlock">
      {
        title && 
        <div className="col-12 col-md-10 pb-5 text-left" style={{borderStyle: "solid", borderWidth: "0 0 1px 0"}}>
          <h2>{ title }</h2>
        </div>
      }
      {
        data && 
        <div className="col-12 mb-3">
          <div className="row">
            {
              data.dataIDs.slice(0, maxLength || data.dataIDs.length).map(id => 
                dataMap(data.data[id])
              )
            }
          </div>
        </div>
      }
      {
        data && maxLengthLink && maxLength && maxLength < data.dataIDs.length &&
          <div className="col-12 my-3">
            <Button
              title="View All"
              dest={maxLengthLink}
              />
          </div>
      }
      {
        buttonText && 
          <div className="col-12 my-3">
            <Button
              title={ buttonText }
              dest={ buttonDest }
              />
          </div>
      }
    </Block>
  );
}


export default ListBlock;

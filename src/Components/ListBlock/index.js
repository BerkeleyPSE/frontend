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
      value: "With over 50 brothers, the close-knit community and life-long relationships created between each individual serves as the core foundation of our fraternity. Our brothers can always rely on each other to grow together and support one another professionally, academically, and socially.",
      img: "https://res.cloudinary.com/berkeleypse-tech/image/upload/fl_force_strip.progressive,q_auto:best/website/home/value1.png"
    },
    prof: {
      key: "Professionalism",
      value: "Through career-oriented information sessions, workshops, and projects, our fraternity provides endless opportunities for our brothers to foster professional development and success. Our collaboration with other organizations on campus provides the ability to network with peers from different backgrounds and gain professional insights. Additionally, our brothers gain the invaluable resources of the Pi Sigma Epsilon National network to expand their career pursuits across the country.",
      img: "https://res.cloudinary.com/berkeleypse-tech/image/upload/fl_force_strip.progressive,q_auto:best/website/home/value2.png"
    },
    cur: {
      key: "Creativity",
      value: "Our brothers study a wide range of majors, from Business Administration to EECS to Media Studies, and pursue a multitude of career paths in consulting, marketing, and more. With this diversity in our interests and passions, our brotherhood fully fosters an environment for brothers to apply their own personal creativities and individuality to career-oriented projects.",
      img: "https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/website/home/value3.png"
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

import React from 'react';
import '../custom.scss';

const contactDataTemp = {
  address: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  phone: "",
}

const ContactBlock = props => {

  const {title, direction="verticle"} = props;

  const contactData = contactDataTemp;
  var orientationName;
  switch (direction) {
    case "verticle":
      orientationName = "col-12";
      break;

    case "horizontal":
      orientationName = "col-12 col-md-6";
      break;
    
    default:
      orientationName = "col-12";
  }

  return (
    <div className="row contact">
      {
        title && 
        <div className="col-12">
          <h4 className="font-weight-bold">{title}</h4>
        </div>
      }
      <div className={`${orientationName} mb-3`}>
        {`${contactData.address}`}
        <br/>{`${contactData.city}, ${contactData.state} ${contactData.zip}`}
      </div>
      <div className={`${orientationName} mb-3`}>
        <a 
          className="mail" 
          href={`mailto:${contactData.email}`}
          >
            {`${contactData.email}`}
        </a>
        <br/>{`${contactData.phone}`}
      </div>
    </div>
  )
}


export default ContactBlock;

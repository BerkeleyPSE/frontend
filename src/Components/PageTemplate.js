import React from 'react';
import '../custom.scss';
import Footer from './Footer';
import NavBar from './NavBar';


const socialData = {
  ids: ["facebook", "instagram", "email"],
  data: {
    "facebook": "https://www.facebook.com/berkeleyPSE/?eid=ARDqczb33zCbl1SDmhdKr1AcvhVbpODggo4AXaOgAWmh0Jmi58wgiSo86gyztAyAb4Ra0pMLsI8Kc53P",
    "instagram": "https://www.instagram.com/pseberkeley/",
    email: "mailto:berkeleypse.president@gmail.com"
  }
}

export default function PageTemplate(props) {

  const { navBarData={title: "Pi Sigma Epsilon", subtitle: "Zeta Chi Chapter"}, footerData, children, theme } = props;

  return (
    <div className="App">
      <NavBar 
        title={navBarData.title} 
        subtitle={navBarData.subtitle} 
        theme={theme}
        />
        {children}
      <Footer 
        social={ socialData }
        theme="primary"
        />
    </div>
  );
}

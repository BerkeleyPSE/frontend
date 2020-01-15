import React from 'react';
import '../custom.scss';
import Footer from './Footer';
import NavBar from './NavBar';
import { ParallaxProvider } from 'react-scroll-parallax';


const socialData = {
  ids: ["facebook", "instagram", "email"],
  data: {
    "facebook": "https://www.facebook.com/events/354465682108836/?event_time_id=355084428713628",
    "instagram": "https://www.facebook.com/events/354465682108836/?event_time_id=355084428713628",
    email: "berkeleypse.president@gmail.com"
  }
}

export default function PageTemplate(props) {

  const { navBarData={title: "Pi Sigma Eplison", subtitle: "Zeta Chi Chapter"}, footerData, children, theme } = props;

  return (
    <ParallaxProvider>
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
    </ParallaxProvider>
  );
}

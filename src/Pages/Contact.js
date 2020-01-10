import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, ListBlock, PageTemplate, Letter, ContactBlock, InfoBlock } from '../Components';

export default function Contact() {
  return (
    <PageTemplate
      theme="primary"
      >
      <Helmet>
        <title>Pi Sigma Eplison - Contact</title>
      </Helmet>
      <Header 
        title="Contact" 
        body="We’d love to speak with you"
        theme="primary"
        height="275px"
        />
      <InfoBlock 
        body={ [
          <span>For general questions or inquiries, please email <a href="maito:berkeleypse.president@gmail.com">berkeleypse.president@gmail.com</a>.</span>,
          <span>For corporate projects or sponsorship questions and inquiries, please email <a href="maito:berkeleypse.pr@gmail.com">berkeleypse.pr@gmail.com</a>.</span>,
          <span>For recruitment questions or concerns, please email <a href="maito:berkeleypse.recruiting@gmail.com">berkeleypse.recruiting@gmail.com</a>.</span>,
          <span>For social media or technical issues, please email <a href="maito:berkeleypse.marketing@gmail.com">berkeleypse.marketing@gmail.com</a>.</span>,
        ] }
        />
    </PageTemplate>
  );
}

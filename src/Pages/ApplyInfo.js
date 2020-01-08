import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, ListBlock, PageTemplate, Letter, ContactBlock } from '../Components';



export default function Home() {
  return (
    <PageTemplate
      theme="primary"
      >
      <Helmet>
        <title>Pi Sigma Eplison - Application Info</title>
      </Helmet>
      <Header 
        title="Spring Recruitment 2019" 
        body="January 25th - February 8th"
        buttonText="Spring 2020 Application"
        buttonDest="/apply-app"
        theme="primary"
        height="475px"
        />

      <Letter
        greet="Dear Rushee,"
        body={[
          "As my last year at UC Berkeley approaches, I’ve taken some time to reflect. A year from now, I’ll have graduated, and my time at this school will be over. I’ll be honest, the thought scares me. So much of my future is unknown, who knows where I’ll end up? But if there’s one thing that I know for sure, it’s that I’ll always have the people that I’ve met through Pi Sigma Epsilon. ",
          "I know, it’s cheesy, but it’s true. Professionally and academically, I’ve never been surrounded by a group of people that has shown more passion, determination, and support for one another. From sharing notes to helping each other mock interview, there’s always someone that wants you to succeed as much as you do.This is why Pi Sigma Epsilon has produced some of the most successful people that I know. From bankers to consultants to engineers, each person has and will accomplish so much. But beyond these successes, what truly makes Pi Sigma Epsilon special is the people. From buying last minute Coachella tickets to being vulnerable for the first time to simply cooking ramen and Korean rice cakes together, these memories with my brothers are what will stick with me for years after college is over. These are the people that have taught me how to embrace who I am, how to fail and get back up, how to be the best version of me. They make me better, and that is something that can’t be found anywhere else. ",
          "So think about who you want to be after you graduate. Make a choice. Come out to our Fall Recruitment 2019 to meet the 40 active brothers that have made UC Berkeley so special for me, and can do the same for you. Turn the person who you’ve always wanted to be into the person that you are, surrounded by the people you call family. "
        ]}
        signiture="Clevian Hsia"
        title="VP Human Resources"
        img="https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers/clevian_hsia1.png"
        />

      <CallToAction 
        title="Follow our Facebook event"
        img="https://drive.google.com/uc?export=view&id=1WPI_xT_fvSaAZHHdRAyg9DnAT1jlz0rO"
        button="RSVP"
        buttonDest="https://www.facebook.com/events/354465682108836/?event_time_id=355084428713628"
        buttonExternal={ true }
        theme="secondary"
        >
      </CallToAction>

      <Header 
        title="Pre-Registration" 
        theme="primary"
        height="300px"
        />

      <CallToAction 
        theme="secondary"
        >
        <ContactBlock />
      </CallToAction>

      <Header 
        title="FAQ" 
        theme="primary"
        height="300px"
        />

      <ListBlock 
        title="Available Services"
        dataSource="availableServices"
        maxLength={3}
        maxLengthLink={'/available-services'}
        theme="accent"
        />
    </PageTemplate>
  );
}

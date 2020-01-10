import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, ListBlock, PageTemplate, Letter, ContactBlock, Block } from '../Components';


const careerUrl = company => `https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/companyLogos/${company}.png`;

const careerCompanies = [
  {
    title: "Accenture",
    key: "accenture",
  },
  {
    title: "Bain & Company",
    key: "bain",
  },
  {
    title: "Barclays",
    key: "barclays",
  },
  {
    title: "Deloitte",
    key: "deloitte",
  },
  {
    title: "EY",
    key: "ey",
  },
  {
    title: "IBM",
    key: "ibm",
  },
  {
    title: "KPMG",
    key: "kpmg",
  },
  {
    title: "P&G",
    key: "pg",
  },
  {
    title: "PwC",
    key: "pwc",
  },
  {
    title: "Twitter",
    key: "twitter",
  },
  {
    title: "Wells Fargo",
    key: "wellsfargo",
  },
];

export default function Home() {
  return (
    <PageTemplate
      theme="primary"
      >
      <Helmet>
        <title>Pi Sigma Eplison - UC Berkeley’s Marketing & Business Fraternity</title>
      </Helmet>
      <Header 
        title="Pi Sigma Eplison" 
        body="UC Berkeley’s Marketing & Business Fraternity"
        buttonText="Spring Rush 2020"
        buttonDest="/apply-info"
        theme="primary"
        height="525px"
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

      <Header 
        title="Our Values" 
        body="Here at Pi Sigma Epsilon, we are committed to three fundamental values."
        theme="primary"
        height="525px"
        />

      <ListBlock 
        dataSource="values"
        theme="secondary"
        buttonText="Learn More"
        buttonDest="/about"
        />

      <Header 
        title="Where We're Going" 
        buttonText="Our Careers"
        buttonDest="/careers"
        theme="primary"
        height="525px"
        />

      <Block 
        theme="secondary"
        >
        <div className="d-flex flex-wrap justify-content-around align-items-center mx-auto" style={{maxWidth: "1020px"}}>
          { careerCompanies.map(info => <img 
              src={careerUrl(info.key)} 
              title={info.title}
              className="m-4"
              style={{maxHeight: "75px", maxWidth: "150px"}}
              />) }
        </div>
      </Block>

    </PageTemplate>
  );
}

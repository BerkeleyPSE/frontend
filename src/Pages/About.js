import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, ListBlock, PageTemplate, Letter, ContactBlock, InfoBlock } from '../Components';
import { AppData } from '../Data';


export default function Home() {
  const currCycle = AppData.getRecruitmentDates()[0];
  const season = currCycle[0];
  const year = currCycle[1];

  return (
    <PageTemplate
      theme="primary"
      >
      <Helmet>
        <title>Pi Sigma Eplison - About Us</title>
      </Helmet>
      <Header 
        title="About Us" 
        body="Learn about our Chapter and Fraternity History"
        theme="primary"
        height="525px"
        img="https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/website/about/header1.png"
        />

      <InfoBlock 
        title="The Zeta Chi Chapter"
        body={[
          "The Zeta Chi chapter of Pi Sigma Epsilon was founded in March 2013. Then-campus junior Sabrina Ruiz observed a lack of marketing and retail management courses and organizations on Berkeley’s campus despite students and recruiters interested in the fields. She believed PSE could be the solution. To make this idea into a reality, Ruiz recruited Kelly Chao, Cynthia Huang, Lydia Kim, Peggy Lin, and Hiu Ngan to compose Zeta Chi’s founding Alpha class. These six officially chartered the chapter in August 2013.",
          "Our chapter endeavors to epitomize the goals of the fraternity in each and every member through various events focused around developing professionalism, confidence, leadership, and networking abilities. Alongside placing the utmost value on its diversity of people, interests, and majors, the Zeta Chi Chapter provides its brothers with opportunities to hone into their marketing and business skills. Thus, in 2016, we established ZC Consulting, a marketing and strategy consulting group, to further support our brothers' experiential learning and professional opportunities.",
          `Now in its ${year - 2013}th year, the Zeta Chi Chapter consist of over 45 members, representing a variety of majors and career paths. In ${season} ${year}, we are excited to be recruiting for the next generation of our family.`,
          "We are proudly recognized and sponsored by the Walter A. Haas School of Business, ASUC, and the UC Berkeley Career Center."
        ]}
        />

      <Header 
        theme="primary"
        height="425px"
        img="https://res.cloudinary.com/berkeleypse-tech/image/upload/fl_force_strip.progressive,q_auto:best/website/about/header2.jpg"
        />

      <InfoBlock 
        title="The Fraternity"
        body={[
          "In 1951, Lloyd L. Antle, an Ohio University graduate and Professor of Marketing at Georgia State University, conceived of the idea that the sales profession should have a professional fraternity of its own. After over a year of planning with the support of three of his colleagues, Pi Sigma Epsilon (PSE) was established on May 14, 1952. All four men were members of the Sales and Marketing Executives (SME) association of Atlanta, Georgia, which continues to be a sponsor of PSE to this day.",
          "Pi Sigma Epsilon has grown to be the premiere organization for motivated and dedicated students looking to maximize their college experience. PSE’s goal is to provide collegiate students with practical business experience through sales and marketing projects, marketing research, professional programs, and social events. Pi Sigma Epsilon gives its members the opportunity to gain hands-on experience, participate in conferences both regionally and nationally, and network with top executives through PSE’s corporate partners. Currently there are over 60 active chapters at Universities across the United States.",
          "To learn more, visit Pi Sigma Epsilon’s national website for more information about the organization as a whole."
        ]}
        />

    </PageTemplate>
  );
}

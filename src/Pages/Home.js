import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, ListBlock, PageTemplate, Letter, ContactBlock, Block } from '../Components';
import { LetterData } from '../Data';


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

 class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        greet: "",
        body: [],
        signature: "",
        position: [],
      }
      this.getHomeLetterData = this.getHomeLetterData.bind(this);
      this.getHomeLetterData();
    }

    getHomeLetterData() {
      LetterData.getLetter("Home", table => {
        table.shift(); //remove labels
        const rv = { body: [] };

        for (var i = 0; i < table.length; i++) {
          const row = table[i];
          const type = row[0].toLowerCase();
          if (type == "paragraph") {
            rv.body.push(row[1]);
          } else {
            rv[type] = row[1];
          }
        };

        this.setState(rv);
      });
    }

    render() {
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
            greet={ this.state.greet }
            body={ this.state.body }
            signiture={ this.state.signature }
            position={ this.state.position }
            img={ "https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers/clevian_hsia1.png" }
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
}

export default Home;


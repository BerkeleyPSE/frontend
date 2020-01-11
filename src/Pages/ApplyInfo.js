import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, ListBlock, PageTemplate, Letter, ContactBlock } from '../Components';
import { LetterData } from '../Data';


 class ApplyInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        greet: "",
        body: [],
        signature: "",
        position: [],
      }
      this.getRushLetterData = this.getRushLetterData.bind(this);
      this.getRushLetterData();
    }

    getRushLetterData() {
      LetterData.getLetter("Rush", table => {
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
            greet={ this.state.greet }
            body={ this.state.body }
            signiture={ this.state.signature }
            position={ this.state.position }
            img={ "https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers/clevian_hsia1.png" }
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
}

export default ApplyInfo;


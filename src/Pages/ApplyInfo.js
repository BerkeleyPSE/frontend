import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, FAQ, PageTemplate, Letter, ContactBlock, PreReg } from '../Components';
import { LetterData, AppData } from '../Data';

const axios = require('axios');

const faqData = [
  ["What makes PSE different from other organizations?", "PSE differentiates itself from other business fraternities and organizations both in its learning philosophy and specialization. We prepare our brothers with the knowledge and skills necessary to succeed in today's business world, but we also go further to provide opportunities to utilize and hone these skills within projects across various industries. PSE hosts networking opportunities and corporate infosessions with professionals and alumni, and puts its members in positions to become their best possible professional selves. But, PSE provides far more than professional development - as a fraternity, we are an intimate, close-knit community where brothers can build strong personal relationships, and lasting friendships."],
  ["Are all recruitment events mandatory?", "You must attend at least one of the three recruitment events (Meet the Chapter, Social Mixer, Case Workshop) to be considered for an interview. The greater the number of events you attend, the more chances you have to meet the brothers and vice versa, and the better we will be able to learn about you."],
  ["What if I can’t attend a recruitment event?", <span>Recruitment events are designed for you to meet our brothers and familiarize yourself with Pi Sigma Epsilon. If you can’t make a recruitment event and would like to chat personally with one of our brothers instead, please contact <a href="mailto:berkeleypse.recruiting@gmail.com">berkeleypse.recruiting@gmail.com</a>. You’re welcome to indicate your availability for a coffee chat and one of our brothers will reach out to you!</span>],
  ["Is there a GPA minimum?", "We have a GPA minimum of 3.0, but we consider applicants holistically."],
  ["What is the time commitment for a prospective member?", "The time commitment for a prospective member (PM) will incrementally change as the process continues. PMs are expected to attend a 3 hour weekly PM training on Monday nights in addition to contributing several hours per week for the first few weeks, and progressively more in the final weeks of training."],
  ["Is there an age/year ceiling?", "We do not have an age requirement, but you must be an undergraduate student with at least 3 semesters remaining (including your semester as a prospective member). First-semester freshmen are welcome to apply!"],
  ["I'm not a Business or Economics major. Can I still join?", "Of course! We love diversity. Close to half of our brothers are not majoring in Business or Economics. The brother who built this website is a Computer Science major. You're more than welcome to join."],
  ["How many PMs does PSE accept each semester?", "It depends. If there are 20 recruits who are qualified, cultural fits, we will accept 20. If there is only one, we'll take him/her. On average, however, we tend to accept around 12 recruits per semester."],
  ['Why do you not use terms such as "rush" or "pledge"?', 'PSE is a professional fraternity, and thus we choose to use terminology that reflects our professional attitude, character, and purpose. Terms such as "recruitment," "prospective member," "prospective member training," and "PM Trainer," are used in lieu of "rush," "pledge," "pledge process," and "pledgemaster," in any verbal or written communication involving participation or membership in Pi Sigma Epsilon.'],
  ["Will I be hazed as a prospective member?", "Absolutely not. PSE respects the time and health of its prospective members. We actively encourage our PMs to raise any concerns to their PM trainers throughout the training process. PMs should expect to be challenged but should not sacrifice any aspect of health for PSE."],
  ["Where can I ask more questions?", <span>Please direct all questions to <a href="mailto:berkeleypse.recruiting@gmail.com">berkeleypse.recruiting@gmail.com</a>.</span>],
];

 class ApplyInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hrPhoto: "",
        greet: "",
        body: [],
        signature: "",
        position: [],
      }
      this.getHRPhoto = this.getHRPhoto.bind(this);
      this.getRushLetterData = this.getRushLetterData.bind(this);
      this.getHRPhoto();
      this.getRushLetterData();
    }

    async getHRPhoto() {
      try {
        const rsp = await axios.get("http://api.berkeleypse.org/brothers/executives");
        const rv = rsp.data.data;

        for (var i = rv.length - 1; i >= 0; i--) {
          const exec = rv[i];
          if (exec["position"] == "Vice President of Human Resources") {
            this.setState({
              hrPhoto: `https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers/${rv[i].key}.jpg`
            });
            return;
          }
        }
      } catch (err) {
        console.error(err);
        return [];
      }
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
    const currCycle = AppData.getRecruitmentDates()[0];
    const season = currCycle[0];
    const year = currCycle[1];
      
      // AppData.postAppPreReg("Sheet1", status => console.log(status), [["test", "ting"]]);

      // const API = `https://sheets.googleapis.com/v4/spreadsheets/1dmMS8TULOs6F_Bp9SgQuP84gAMQklNLwoTvCrf2DIp4/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${process.env.REACT_APP_CAREERS_SHEET_KEY}`

      // fetch(API).then(response => response.json()).then(data => console.log(data));


      return (
        <PageTemplate
          theme="primary"
          >
          <Helmet>
            <title>Pi Sigma Eplison - Application Info</title>
          </Helmet>
          <Header 
            title={`${season} Recruitment ${year}`} 
            body={"January 25th - February 8th"  /*MANUALL CHANGE THIS*/}
            buttonText="Go to Application"
            buttonDest="/apply-app"
            theme="primary"
            height="475px"
            />

          <Letter
            greet={ this.state.greet }
            body={ this.state.body }
            signiture={ this.state.signature }
            position={ this.state.position }
            img={ this.state.hrPhoto }
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

          {/*<CallToAction 
            theme="secondary"
            >
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdIwEISfTusew2kBzTj0Qgf3psKcO94Rglzd-XCMVlrhk0gow/viewform?embedded=true" width="640" height="613" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </CallToAction>*/}

          <PreReg
            title="hrello"
            theme="secondary"/>

          <Header 
            title="FAQ" 
            theme="primary"
            height="300px"
            />

          <FAQ 
            data={ faqData }
            theme="secondary"
            />
        </PageTemplate>
      );
    }
}

export default ApplyInfo;


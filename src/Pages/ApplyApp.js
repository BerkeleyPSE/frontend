import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, FAQ, PageTemplate, Letter, ContactBlock, PreReg, AppBlock } from '../Components';
import { LetterData, AppData } from '../Data';


 class ApplyApp extends React.Component {
    render() {
      const currCycle = AppData.getRecruitmentDates()[0];
      const season = currCycle[0];
      const year = currCycle[1];

      return (
        <PageTemplate
          theme="primary"
          >
          <Helmet>
            <title>Pi Sigma Eplison - Application Info</title>
          </Helmet>
          <Header 
            title={`${season} Recruitment ${year}`} 
            theme="primary"
            height="475px"
            />

          <AppBlock
            theme="secondary"/>

        </PageTemplate>
      );
    }
}

export default ApplyApp;


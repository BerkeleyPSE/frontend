import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { PageTemplate, Header, TeamMemberBlock, SubNavBar } from '../Components';

const axios = require('axios');

const attributes = [
  {
    key: "year",
    title: "Year",
  },
  {
    key: "majors",
    title: "Majors",
  },
  {
    key: "minors",
    title: "Minors",
  },
  {
    key: "hometown",
    title: "Hometown",
  },
  {
    key: "pseClass",
    title: "Class",
  },
  {
    key: "careerInterests",
    title: "Career Interests",
  }
];

const subNavData = {
  dataIDs: ["back"],
  data: {
    back: {
      title: "< BROTHERS",
      dest: "/brothers"
    }
  }
}

class BrothersProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      data: []
    };
    this.getData = this.getData.bind(this);
    this.getData(props.brotherKey)
  }

  async getData(key) {
    try {
      const rsp = await axios.get(`http://api.berkeleypse.org/brothers/key/${key}`);
      this.setState({
        data: rsp.data.data
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <PageTemplate
        theme="primary"
        >
        <Helmet>
          <title>Pi Sigma Eplison - Meet the Brothers</title>
        </Helmet>
        <Header 
          title="The Brothers" 
          theme="primary"
          height="225px"
          />

        <SubNavBar
          align="left"
          data={ subNavData }
          />

        <TeamMemberBlock 
          attributes={ attributes }
          data={ this.state.data }
          blockClass="pt-0"
          theme="secondary"
          />

      </PageTemplate>
    );
  }
}

export default BrothersProfile;

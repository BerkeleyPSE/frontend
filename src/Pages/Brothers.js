import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { PageTemplate, Header, TeamBlock } from '../Components';

const axios = require('axios');

const sortLastName = (s1, s2) => {
  const l1 = s1.name.split(' ').splice(1)[0].toUpperCase().charCodeAt(0);
  const l2 = s2.name.split(' ').splice(1)[0].toUpperCase().charCodeAt(0);
  return l1 - l2;
};

const splitActives = actives => {
  const testExec = bool => obj => !!obj.isExecutive === bool;
  console.log(actives.filter(obj => console.log(obj.isExecutive, !!obj.isExecutive)));
  return [
    actives.filter(testExec(true)), 
    actives.filter(testExec(false))
  ];
}

class Brothers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eboardData: [],
      activeData: []
    };
    this.getActives = this.getActives.bind(this);
    this.getEboard = this.getEboard.bind(this);
    this.getActives();
    this.getEboard();
  }

  async getActives() {
    try {
      const rsp = await axios.get("http://api.berkeleypse.org/brothers/all");
      const rv = rsp.data.data;
      rv.sort(sortLastName);
      this.setState({
        activeData: rv
      });
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async getEboard() {
    try {
      const rsp = await axios.get("http://api.berkeleypse.org/brothers/executives");
      const rv = rsp.data.data;
      rv.sort(sortLastName);
      this.setState({
        eboardData: rv
      });
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  render() {
    const execKeys = this.state.eboardData.map(obj => obj.key);
    const nonExecs = this.state.activeData.filter(obj => 
      !(execKeys.includes(obj.key))
    );
    console.log(execKeys);
    console.log(nonExecs);
    return (
      <PageTemplate
        theme="primary"
        >
        <Helmet>
          <title>Pi Sigma Eplison - Meet the Brothers</title>
        </Helmet>
        <Header 
          title="Meet the Brothers" 
          theme="primary"
          height="425px"
          />

        <TeamBlock 
          title="Executive Board"
          data={ this.state.eboardData }
          />

        <TeamBlock 
          title="Active Brothers"
          data={ nonExecs }
          />

      </PageTemplate>
    );
  }
}

export default Brothers;

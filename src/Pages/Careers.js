import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, ListBlock, PageTemplate, Letter, ContactBlock, InfoBlock, Table, SubNavBar } from '../Components';


import getCareers from '../Careers.js';

const validYears = [2019, 2018, 2017, 2016, 2015];

const parseYear = year => year && validYears.includes(parseInt(year)) ? 
  parseInt(year) : 
  validYears[0];

const processData = data => {
  var rv = []
  var labels = data.shift().slice(0, 4);
  var map = {};

  for (var i = 0; i < data.length; i++) {
    const row = data[i];
    const id = row[4];
    if (!(id in map)) {
      map[id] = [];
    }
    map[id].push(row.slice(0, 4));
  }
  return [labels, Object.keys(map), map];
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    const year = parseYear(props.year);
    this.state = {
      year: year,
      fullTimeLabels: [],
      fullTimeIds: [],
      fullTimeData: [],
      internshipLabels: [],
      internshipIds: [],
      internshipData: []
    }
    this.genValidYearData = this.genValidYearData.bind(this);
    this.getFullTimeData = this.getFullTimeData.bind(this);
    this.getInternshipData = this.getInternshipData.bind(this);

    getCareers("FullTime", year, this.getFullTimeData);
    getCareers("Internships", year, this.getInternshipData);
    console.log("constructor triggeres");
  }

  getFullTimeData(rawData) {
    const [ lables, ids, data ] = processData(rawData);
    this.setState({
      fullTimeLabels: lables,
      fullTimeIds: ids,
      fullTimeData: data,
    });
  }

  getInternshipData(rawData) {
    const [ lables, ids, data ] = processData(rawData);
    this.setState({
      internshipLabels: lables,
      internshipIds: ids,
      internshipData: data,
    });
  }

  

  genValidYearData(validYears) {
    var data = {};
    for (var i = 0; i < validYears.length; i++) {
      const year = validYears[i];
      data[year] = {title: year, dest: "/careers/" + year};
    }
    return {dataIDs: validYears, data: data};
  }

  render() {
    console.log("render triggeres");
    const year = parseYear(this.props.year);
    if (year != this.state.year && false) {
      this.setState(
        {year: year},
        () => getCareers("FullTime", year, this.getFullTimeData),
        () => getCareers("Internships", year, this.getInternshipData)
      );
    }

    return (
      <PageTemplate
        theme="primary"
        >
        <Helmet>
          <title>Pi Sigma Eplison - Careers</title>
        </Helmet>

        <Header 
          title="Where We Go" 
          body="Our brothers boast a broad and rigorus collection of career paths"
          theme="primary"
          height="425px"
          />

        <SubNavBar
          data={ this.genValidYearData(validYears) }
          />
        <Table 
          title="Full-Time"
          labels={this.state.fullTimeLabels}
          ids={this.state.fullTimeIds}
          data={this.state.fullTimeData}
          blockClass="mt-n5"
          />

        <Table 
          title="Internships"
          labels={this.state.internshipLabels}
          ids={this.state.internshipIds}
          data={this.state.internshipData}
          blockClass="mt-n5"
          />

      </PageTemplate>
    );
  }
}

export default Home;
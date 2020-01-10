import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { Header, CallToAction, ListBlock, PageTemplate, Letter, ContactBlock, InfoBlock, Table, SubNavBar } from '../Components';
import { getCareers, validYears } from '../Careers.js';

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

class Careers extends React.Component {
  constructor(props) {
    super(props);

    const year = parseYear(props.year);
    this.state = {
      year: "",
      fullTimeLabels: [],
      fullTimeIds: [],
      fullTimeData: [],
      internshipLabels: [],
      internshipIds: [],
      internshipData: []
    }
    this.genValidYearData = this.genValidYearData.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  updateData() {
    getCareers("FullTime", this.props.year, rawDataFT => {
      const [ lablesFT, idsFT, dataFT ] = processData(rawDataFT);
      getCareers("Internships", this.props.year, rawDataI => {
        const [ lablesI, idsI, dataI ] = processData(rawDataI);
          this.setState({
            year: this.props.year,
            fullTimeLabels: lablesFT,
            fullTimeIds: idsFT,
            fullTimeData: dataFT,
            internshipLabels: lablesI,
            internshipIds: idsI,
            internshipData: dataI,
          });
      })
    })
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
    if (year != this.state.year) {
      this.updateData();
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
          blockClass="pt-0"
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

export default Careers;
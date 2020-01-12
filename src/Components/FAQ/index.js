import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block.js';
import Button from '../Button';
import LoadingIcon from '../LoadingIcon';


class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openList: []
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(key) {
    const openList = this.state.openList;
    const i = openList.indexOf(key);
    if ( i >= 0 ) {
      openList.splice(i, 1);
    } else {
      openList.push(key);
    }

    this.setState({
      openList: openList
    });
  }

  render() {
    const { data, theme="secondary"} = this.props;

    const spacer = <div className="d-none d-lg-block col-1"/>;

    const genQuestion = (question, answer) => {
      const key = question.split(' ').join('');
      const isOpen = this.state.openList.includes(key);

      return (
        <div key={ key } className={`row ${ isOpen && "open"}`} >
          <div className="col-12 mx-0 px-0 pb-1 mb-2 question d-flex justify-content-between align-items-baseline" onClick={() => this.toggle(key)}>
            <h3>{question}</h3>
            <div className="d-flex justify-content-between align-items-center"><i className="fa fa-sort-down pb-2" /></div>
          </div>
          <div className="col-12 answer">
            <p>{answer}</p>
          </div>
        </div>
      );
    };

    return (
      <Block theme={theme} className="faq">
        { spacer }
        <div className="col-12 col-lg-10 text-left">
          {
            data ? 
              data.map( row => genQuestion(row[0], row[1]) ) :
              <LoadingIcon />
          }
        </div>
        { spacer }
      </Block>
    );
  }
}


export default FAQ;

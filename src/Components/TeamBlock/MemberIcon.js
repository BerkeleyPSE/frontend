import React from 'react';
import '../../custom.scss';
import './styles.scss';
import {
  Link
} from "react-router-dom";
import Block from '../Block';
import Button from '../Button';

// const BrotherIcon = props => (
//   <div key={props.brother.key} className={`row mx-0 ${props.i && 'ml-2'} mb-2 profile`}>
//     <div className="col-12 px-0 img public" style={{backgroundImage: `url(https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers/${props.brother.key}.png)`}}>
//       <div className="col-12 px-0 img private" style={{backgroundImage: `url(https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers/clevian_hsia1.png)`}}>
//       </div>
//     </div>
//     <div className="col-12">
//       <p className="font-weight-bold py-1">{ props.brother.name }</p>
//     </div>
//   </div>
// )

class MemberIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: `https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers/${this.props.brother.key}.jpg` };
    this.hover = this.hover.bind(this);
    this.unHover = this.unHover.bind(this);
  }

  hover() {
    true && 
    this.setState((state, props) => ({
        // src: "https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers/clevian_hsia1.jpg"
        src: "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/s320x320/79473714_583927479070203_2871360970825924608_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=sml41ASLbfIAX-CsKNd&oh=801577fd97288b1707feb789f98d06be&oe=5ED01F93"
      }));
  }

  unHover() {
    this.setState((state, props) => ({
        src: `https://res.cloudinary.com/berkeleypse-tech/image/upload/fl_force_strip.progressive,q_auto:best/brothers/${this.props.brother.key}.jpg`
      }));
  }

  render() {
    return (
      <Link 
        className={`row mx-0 mb-3 profile`}
        to={`/brothers/${this.props.brother.key}`}
        onMouseEnter={this.hover}
        onMouseLeave={this.unHover}
        >
        <div className="col-12 px-0 imgWrapper d-flex justify-content-center">
          <img src={ this.state.src }/>
        </div>
        <div className="col-12">
          <p className="font-weight-bold py-1">{ this.props.brother.name }</p>
        </div>
      </Link>
    )
  }
}


export default MemberIcon;

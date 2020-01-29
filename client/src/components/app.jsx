import React from 'react';
import Navbar from './navbar.jsx';
import Navmen from './navmen.jsx';
import Navwomen from './navwomen.jsx';
import Navkids from './navkids.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: false,
      nav2: false,
      nav3: false
    };
    this.showNav1 = this.showNav1.bind(this);
    this.showNav2 = this.showNav2.bind(this);
    this.showNav3 = this.showNav3.bind(this);
  };
  showNav1() {
    this.setState({
      nav1: !this.state.nav1
    });
  }
  showNav2() {
    this.setState({
      nav2: !this.state.nav2
    });
  }
  showNav3() {
    this.setState({
      nav3: !this.state.nav3
    });
  }

  render() {
    return(
      <div>
        <div className="navBack">
          <Navbar 
          nav1={this.state.nav1} 
          showNav1={this.showNav1}
          showNav2={this.showNav2}
          showNav3={this.showNav3}
          />
        </div>
        {this.state.nav1 ? (
          <Navmen />
        ): null}
        {this.state.nav2 ? (
          <Navwomen />
        ): null}
        {this.state.nav3 ? (
          <Navkids />
        ): null}
      </div>
    );
  };
};

export default App;
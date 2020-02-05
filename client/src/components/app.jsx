import React from 'react';
import MainNavbar from './navbar.jsx';
import Navmen from './navmen.jsx';
import Navwomen from './navwomen.jsx';
import Navkids from './navkids.jsx';
import Navsports from './navsports.jsx';
import Navbrands from './navbrands.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: false,
      nav2: false,
      nav3: false,
      nav4: false,
      nav5: false
    };
    this.showNav1 = this.showNav1.bind(this);
    this.showNav2 = this.showNav2.bind(this);
    this.showNav3 = this.showNav3.bind(this);
    this.showNav4 = this.showNav4.bind(this);
    this.showNav5 = this.showNav5.bind(this);
    this.hideAll = this.hideAll.bind(this);
  }
  componentDidMount() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  }
  showNav1() {
    this.setState({
      nav1: true,
      nav2: false,
      nav3: false,
      nav4: false,
      nav5: false
    });
  }
  showNav2() {
    this.setState({
      nav1: false,
      nav2: !this.state.nav2,
      nav3: false,
      nav4: false,
      nav5: false
    });
  }
  showNav3() {
    this.setState({
      nav1: false,
      nav2: false,
      nav3: !this.state.nav3,
      nav4: false,
      nav5: false
    });
  }
  showNav4() {
    this.setState({
      nav1: false,
      nav2: false,
      nav3: false,
      nav4: !this.state.nav4,
      nav5: false
    });
  }
  showNav5() {
    this.setState({
      nav1: false,
      nav2: false,
      nav3: false,
      nav4: false,
      nav5: !this.state.nav5
    });
  }
  hideAll() {
    this.setState({
      nav1: false,
      nav2: false,
      nav3: false,
      nav4: false,
      nav5: false
    });
  }


  render() {
    return(
      <div>
        <div id="navbar" className="navBack" onMouseEnter={this.hideAll}>
          <MainNavbar 
          nav1={this.state.nav1} 
          showNav1={this.showNav1}
          showNav2={this.showNav2}
          showNav3={this.showNav3}
          showNav4={this.showNav4}
          showNav5={this.showNav5}
          hideAll={this.hideAll}
          />
          {this.state.nav1 ? (
            <Navmen keepNav1={this.showNav1}/>
          ): null}
          {this.state.nav2 ? (
            <Navwomen />
          ): null}
          {this.state.nav3 ? (
            <Navkids />
          ): null}
          {this.state.nav4 ? (
            <Navsports />
          ): null}
          {this.state.nav5 ? (
            <Navbrands />
          ): null}
        </div>
      </div>
    );
  };
};

export default App;
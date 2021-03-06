import React from 'react';
import MainNavbar from './navbar.jsx';
import Navmen from './navmen.jsx';
import Navwomen from './navwomen.jsx';
import Navkids from './navkids.jsx';
import Navsports from './navsports.jsx';
import Navbrands from './navbrands.jsx';

class SearchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: false,
      nav2: false,
      nav3: false,
      nav4: false,
      nav5: false
    };
    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
  }
  componentDidMount() {
    // handles navbar hiding/showing on scroll down/up
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
  // handles each navmenu show/hide
  showNav(navnum) {
    for (var nav in this.state) {
      if (this.state[nav] === true) {
        this.setState({
          [nav] : false
        })
      }
    }
    this.setState({
      [navnum]: true
    });
  }
  hideNav() {
    for (var nav in this.state) {
      if (this.state[nav] === true) {
        this.setState({
          [nav] : false
        })
      }
    }
  }

  render() {
    return(
      <div>
        <div id="navbar" className="cbnavBack">
          <MainNavbar 
          showNav={this.showNav}
          hideNav={this.hideNav}
          />
          {this.state.nav1 ? (
            <Navmen hideNav={this.hideNav} />
          ): null}
          {this.state.nav2 ? (
            <Navwomen hideNav={this.hideNav} />
          ): null}
          {this.state.nav3 ? (
            <Navkids hideNav={this.hideNav} />
          ): null}
          {this.state.nav4 ? (
            <Navsports hideNav={this.hideNav} />
          ): null}
          {this.state.nav5 ? (
            <Navbrands hideNav={this.hideNav} />
          ): null}
        </div>
      </div>
    );
  };
};

export default SearchApp;

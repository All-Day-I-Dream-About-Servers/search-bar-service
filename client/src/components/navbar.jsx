import React from 'react';
import Search from './search.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcart: false,
      menlink: true
    };
    this.showcart = this.showcart.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  showcart() {
    this.setState({
      showcart: !this.state.showcart
    });
  }
  toggle() {
    this.setState({
      menlink: !this.state.menlink
    });
  } 

  render() {

    // var linkcolor = this.state.menlink ? "menulinkhovered":"menlink"

    return(
      <nav className="navbar">
        <div className="logocontainer">
          <img className="logo" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/logo.png"></img>
        </div>
        <div className="mainmenu">
          <div className="navtop">
            <div className="toplinks">
              <a href="#">ALSO VISIT &nbsp;</a>
              <img className="reeboklogo" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/reebok.png"></img>
              <span className="helplinks"><a href="#">HELP &nbsp;| &nbsp;</a>
              <a href="#">ORDER TRACKER AND RETURNS &nbsp;|</a>
              <a className="join" href="#"> &nbsp;JOIN CREATORS CLUB &nbsp; </a>
              <a href="#">| &nbsp;CREATORS CLUB &nbsp;| &nbsp;</a>
              <a href="#">&nbsp; </a>
              <a href="#">LOG IN </a></span>
            </div>
          </div>
          <div className="navbottom">
            <div className="menulinkcontainer" onMouseEnter={() => this.props.showNav1()} onMouseLeave={() => this.props.showNav1()}>
              <a className="menulink" href="#">MEN</a>
            </div>
            <div className="menulinkcontainer" onMouseEnter={() => this.props.showNav2()} onMouseLeave={() => this.props.showNav2()}>
              <a className="menulink" href="#">WOMEN</a>
            </div>
            <div className="menulinkcontainer" onMouseEnter={() => this.props.showNav3()} onMouseLeave={() => this.props.showNav3()}>
              <a className="menulink" href="#">KIDS</a>
            </div>
            <a className="line" href="#">| </a>
            <div className="menulinkcontainer" onMouseEnter={() => this.props.showNav4()} onMouseLeave={() => this.props.showNav4()}>
              <a className="menulink" href="#">SPORTS</a>
            </div>
            <div className="menulinkcontainer" onMouseEnter={() => this.props.showNav5()} onMouseLeave={() => this.props.showNav5()}>
              <a className="menulink" href="#">BRANDS</a>
            </div>
            <a className="line" href="#">| </a>
            <div className="menulinkcontainer">
              <a className="menulink" href="#">RELEASE DATES</a>
            </div>
            <div className="menusearch">
              <Search />
              <a className="cartlink" href="#" onMouseEnter={() => this.showcart()} onMouseLeave={() => this.showcart()}><img className="shoppingcart" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/cart.png"></img></a>
            </div>
          </div>
          {this.state.showcart ? (
          <div className="emptycartcontainer">
            <div className="emptycart">
              <img className="cartimg" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/Screen+Shot+2020-01-28+at+4.01.40+PM.png"></img>
            </div>
          </div>
          ) : null }
        </div>
      </nav>
    )
  }
};

export default Navbar;
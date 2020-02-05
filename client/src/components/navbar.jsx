import React from 'react';
import Search from './search.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcart: false,
    };
    this.showcart = this.showcart.bind(this);
  }

  showcart() {
    this.setState({
      showcart: !this.state.showcart
    });
  }

  render() {
    return(
      <nav className="navbar">
        <div className="logocontainer">
          <img className="logo" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/logosmall.png"></img>
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
              <a href="#" className="svg"><svg id="profile" viewBox="0 -5 20 24" width="26" height="26"><g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"><path d="M19 20.5L15.63 16H4.38L1 20.5"></path><circle cx="10" cy="8.5" r="4.5"></circle></g></svg></a>
            </div>
          </div>
          <div className="navbottom">
            <div className="menulinkcontainer" 
              onMouseEnter={() => this.props.showNav("nav1")} 
              onMouseLeave={() => this.props.hideNav("nav1")}>
              <a className="menulink" href="#">MEN</a>
            </div>
            <div className="menulinkcontainer" 
              onMouseEnter={() => this.props.showNav("nav2")} 
              onMouseLeave={() => this.props.hideNav("nav2")}>
              <a className="menulink" href="#">WOMEN</a>
            </div>
            <div className="menulinkcontainer" 
              onMouseEnter={() => this.props.showNav("nav3")} 
              onMouseLeave={() => this.props.hideNav("nav3")}>
              <a className="menulink" href="#">KIDS</a>
            </div>
            <a className="line" href="#">| </a>
            <div className="menulinkcontainer" 
              onMouseEnter={() => this.props.showNav("nav4")} 
              onMouseLeave={() => this.props.hideNav("nav4")}>
              <a className="menulink" href="#">SPORTS</a>
            </div>
            <div className="menulinkcontainer" 
              onMouseEnter={() => this.props.showNav("nav5")} 
              onMouseLeave={() => this.props.hideNav("nav5")}>
              <a className="menulink" href="#">BRANDS</a>
            </div>
            <a className="line" href="#">| </a>
            <div className="menulinkcontainer" >
              <a className="release menulink" href="#">RELEASE DATES</a>
            </div>
            <div className="menusearch">
              <Search />
              <div onMouseEnter={() => this.showcart()} onMouseLeave={() => this.showcart()}>
                <a className="cartlink" href="#"><img className="shoppingcart" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/cart.png"></img></a>
              </div>
            </div>
          </div>
          <div className="emptycartcontainer">
          {this.state.showcart ? (
            <div className="emptycart">
              <img className="cartimg" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/Screen+Shot+2020-01-28+at+4.01.40+PM.png"></img>
            </div>
          ):null}
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar;
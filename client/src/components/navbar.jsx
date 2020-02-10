import React from 'react';
import Search from './search.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcart: false,
    };
    this.showcart = this.showcart.bind(this);
    this.hidecart = this.hidecart.bind(this);
  }

  showcart() {
    this.setState({
      showcart: true
    });
  }

  hidecart() {
    this.setState({
      showcart: false
    });
  }

  render() {
    return(
      <nav className="cbnavbar">
        <div className="cblogocontainer" onMouseEnter={() => this.props.hideNav()}>
          <img className="cblogo" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/logosmall.png"></img>
        </div>
        <div className="cbmainmenu">
          <div className="cbnavtop" onMouseEnter={() => this.props.hideNav()}>
            <div className="cbtoplinks">
              <a className="cbvisit" href="#">ALSO VISIT &nbsp;
              <img className="cbreeboklogo" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/reebok.png"></img>
              </a>
              <span className="cbhelplinks"><a href="#">HELP &nbsp;| &nbsp;</a>
              <a href="#">ORDER TRACKER AND RETURNS &nbsp;|</a>
              <a className="cbjoin" href="#"> &nbsp;JOIN CREATORS CLUB &nbsp; </a>
              <a href="#">| &nbsp;CREATORS CLUB &nbsp;| &nbsp;</a>
              <a href="#">&nbsp; </a>
              <a href="#">LOG IN </a></span>
              <a href="#" className="svg"><svg id="profile" viewBox="0 -5 20 24" width="26" height="26"><g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"><path d="M19 20.5L15.63 16H4.38L1 20.5"></path><circle cx="10" cy="8.5" r="4.5"></circle></g></svg></a>
            </div>
          </div>
          <div className="cbnavbottom">
            <div>
              <div className="cbmenulinkcontainer" onMouseEnter={() => this.props.showNav("nav1")}>
                <a className="cbmenulink" href="#">MEN</a>
              </div>
              <div className="cbmenulinkcontainer" onMouseEnter={() => this.props.showNav("nav2")}>
                <a className="cbmenulink" href="#">WOMEN</a>
              </div>
              <div className="cbmenulinkcontainer" onMouseEnter={() => this.props.showNav("nav3")}>
                <a className="cbmenulink" href="#">KIDS</a>
              </div>
              <a className="cbline" href="#">| </a>
              <div className="cbmenulinkcontainer" onMouseEnter={() => this.props.showNav("nav4")}>
                <a className="cbmenulink" href="#">SPORTS</a>
              </div>
              <div className="cbmenulinkcontainer" onMouseEnter={() => this.props.showNav("nav5")}>
                <a className="cbmenulink" href="#">BRANDS</a>
              </div>
              <a className="cbline" href="#">| </a>
              <div className="cbmenulinkcontainer" onMouseEnter={() => this.props.hideNav()}>
                <a className="cbrelease cbmenulink" href="#">RELEASE DATES</a>
              </div>
            </div>
            <div className="cbmenusearch">
              <Search hidecart={() => this.hidecart()} />
              <div onMouseEnter={() => this.showcart()} onMouseLeave={() => this.hidecart()}>
                <a className="cbcartlink" href="#"><img className="cbshoppingcart" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/cart.png"></img></a>
              </div>
            </div>
          </div>
          <div className="cbemptycartcontainer">
          {this.state.showcart ? (
            <div className="cbemptycart">
              <img className="cbcartimg" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/Screen+Shot+2020-01-28+at+4.01.40+PM.png"></img>
            </div>
          ):null}
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar;
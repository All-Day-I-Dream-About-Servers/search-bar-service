import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcart: false
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
            <a className="menulink" href="#">MEN </a>
            <a className="menulink" href="#">WOMEN </a>
            <a className="menulink" href="#">KIDS | </a>
            <a className="menulink" href="#">SPORTS BRANDS | </a>
            <a className="menulink" href="#">RELEASE DATES</a>
            <div className="menusearch">
              <form>
                <input type="text" className="searchbar" placeholder="Search"></input>
              </form>
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
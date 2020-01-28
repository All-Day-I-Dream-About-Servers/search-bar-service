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
              <a href="#">Item 1</a>
              <a href="#">Item 2</a>
              <a href="#">Item 3</a>
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
              <h3>YOUR BAG IS EMPTY</h3>
            </div>
          </div>
          ) : null }

        </div>
      </nav>
    )
  }
};

export default Navbar;
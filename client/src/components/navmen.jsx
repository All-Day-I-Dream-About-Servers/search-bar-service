import React from 'react';

class Navmen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="cbexpandedcontainer" onMouseLeave={() => this.props.hideNav()}>
        <div className="cbtitlemen">
          <a className="cbmenulinkblack" href="#">MEN</a>
        </div>
        <div className="cbmaincontainer">
          <div className="cbmainline">
            <div className="cbcolumn">
              <h3 className="cbtitle">TRENDING</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
                <li><hr/></li>
                <li>Superstar 2020</li>
                <li>Classic Sneakers</li>
                <li>R.Y.V Collection</li>
                <li>Winter Collection</li>
                <li>Your Best Year</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <h3 className="cbtitle">SHOES</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Originals</li>
                <li>Running</li>
                <li>Soccer</li>
                <li>Basketball</li>
                <li>Football</li>
                <li>Skateboarding</li>
                <li>Workout</li>
                <li>Essentials</li>
                <li>Sandals & Slides</li>
                <li>Hiking & Outdoor</li>
                <li>Golf</li>
                <li>Tennis</li>
                <li>Baseball</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <h3 className="cbtitle">CLOTHING</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Pants</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets & Vests</li>
                <li>Track Suits</li>
                <li>Short Sleeve Shirts</li>
                <li>T-Shirts</li>
                <li>Long Sleeve Shirts</li>
                <li>Jerseys</li>
                <li>Tights</li>
                <li>Shorts</li>
                <li>Tank Tops</li>
                <li>Swim</li>
                <li>Socks & Underwear</li>
              </ul>
            </div>
            <div className="cbcolumn">
            <h3 className="cbtitle">ACCESSORIES</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Bags & Backpacks</li>
                <li>Hats & Beanies</li>
                <li>Phone Cases</li>
                <li>Watches</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <h3 className="cbtitle">SALE</h3>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li><hr /></li>
                <li>Less than $50</li>
                <li>Less than $100</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <h3 className="cbtitle">COLLECTIONS</h3>
              <ul>
                <li>adicolor</li>
                <li>NMD</li>
                <li>Ultraboost</li>
                <li>Superstar</li>
                <li>Stan Smith</li>
                <li>Y-3</li>
                <li>YEEZY</li>
                <li><hr /></li>
                <li>Running</li>
                <li>Soccer</li>
                <li>Outdoor</li>
                <li>Basketball</li>
                <li>Football</li>
                <li>Swim</li>
              </ul>
            </div>
          </div>
          <div className="cbbottomtextcontainer">
            <p className="cbbottomtext"></p>
            <p className="cbbottomtext">All Men's Shoes</p>
            <p className="cbbottomtext">All Men's Clothing</p>
            <p className="cbbottomtext">All Men's Accessories</p>
            <p className="cbbottomtext">All Men's Sale</p>
            <p className="cbbottomtext"></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Navmen;
import React from 'react';

class Navwomen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="expandedcontainer">
        <div className="titlewomen">
          <a className="menulinkblack" href="#">WOMEN</a>
        </div>
        <div className="maincontainer">
          <div className="mainline">
            <div className="column">
              <h3 className="title">TRENDING</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
                <li><hr/></li>
                <li>Superstar 2020</li>
                <li>Classic Sneakers</li>
                <li>R.Y.V Collection</li>
                <li>Believe This Tight</li>
                <li>Winter Collection</li>
                <li>Your Best Year</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">SHOES</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Originals</li>
                <li>Running</li>
                <li>Workout</li>
                <li>Soccer</li>
                <li>Essentials</li>
                <li>Sandals & Slides</li>
                <li>Hiking & Outdoor</li>
                <li>Tennis</li>
                <li>Golf</li>
                <li>Volleyball</li>
                <li>Softball</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">CLOTHING</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Plus Sizes 1X - 4X</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Pants</li>
                <li>Leggings & Tights</li>
                <li>Sports Bras</li>
                <li>Track Suits</li>
                <li>Jackets & Vests</li>
                <li>Short Sleeve Shirts</li>
                <li>Long Sleeve Shirts</li>
                <li>Dresses & Skirts</li>
                <li>Shorts</li>
                <li>Tank Tops</li>
                <li>Swim</li>
                <li>Socks</li>
              </ul>
            </div>
            <div className="column">
            <h3 className="title">ACCESSORIES</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Bags & Backpacks</li>
                <li>Hats & Beanies</li>
                <li>Phone Cases</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">SALE</h3>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li><hr /></li>
                <li>Less than $50</li>
                <li>Less than $100</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">COLLECTIONS</h3>
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
                <li>Training</li>
                <li>Outdoor</li>
                <li>Yoga</li>
                <li>Swim</li>
              </ul>
            </div>
          </div>
          <div className="bottomtextcontainer">
            <p className="bottomtext"></p>
            <p className="bottomtext">All Women's Shoes</p>
            <p className="bottomtext">All Women's Clothing</p>
            <p className="bottomtext">All Women's Accessories</p>
            <p className="bottomtext">All Women's Sale</p>
            <p className="bottomtext"></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Navwomen;
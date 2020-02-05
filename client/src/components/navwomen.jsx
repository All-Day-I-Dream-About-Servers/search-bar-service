import React from 'react';

class Navwomen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="cbexpandedcontainer">
        <div className="cbtitlewomen">
          <a className="cbmenulinkblack" href="#">WOMEN</a>
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
                <li>Believe This Tight</li>
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
            <div className="cbcolumn">
              <h3 className="cbtitle">CLOTHING</h3>
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
            <div className="cbcolumn">
            <h3 className="cbtitle">ACCESSORIES</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Bags & Backpacks</li>
                <li>Hats & Beanies</li>
                <li>Phone Cases</li>
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
                <li>Training</li>
                <li>Outdoor</li>
                <li>Yoga</li>
                <li>Swim</li>
              </ul>
            </div>
          </div>
          <div className="cbbottomtextcontainer">
            <p className="cbbottomtext"></p>
            <p className="cbbottomtext">All Women's Shoes</p>
            <p className="cbbottomtext">All Women's Clothing</p>
            <p className="cbbottomtext">All Women's Accessories</p>
            <p className="cbbottomtext">All Women's Sale</p>
            <p className="cbbottomtext"></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Navwomen;
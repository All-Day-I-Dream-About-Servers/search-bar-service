import React from 'react';

class Navkids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="expandedcontainer">
        <div className="titlekids">
          <a className="menulinkblack" href="#">KIDS</a>
        </div>
        <div className="maincontainerkids">
          <div className="mainline">
            <div className="column">
              <h3 className="title">TRENDING</h3>
              <ul>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
                <li><hr/></li>
                <li>Superstar 2020</li>
                <li>Star Wars</li>
                <li>Family Matching</li>
                <li>Winter Collection</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">YOUTH</h3>
              <h3 className="subtitle">(AGE 8-14)</h3>
              <ul>
                <li>Boys Shoes</li>
                <li>Girls Shoes</li>
                <li>Boys Clothing</li>
                <li>Girls Clothing</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">CHILDREN</h3>
              <h3 className="subtitle">(AGE 4-8)</h3>
              <ul>
                <li>Boys Shoes</li>
                <li>Girls Shoes</li>
                <li>Boys Clothing</li>
                <li>Girls Clothing</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="column">
            <h3 className="title">BABY & TODDLERS</h3>
            <h3 className="subtitle">(AGE 0-4)</h3>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">SALE</h3>
              <ul>
                <li>Youth (Age 8-14)</li>
                <li>Children (Age 4-8</li>
                <li>Baby & Toddler (Age 0-4)</li>
                <li><hr /></li>
                <li>Less than $30</li>
                <li>Less than $50</li>
              </ul>
            </div>
            <div className="column">
              {/* <h3 className="title">COLLECTIONS</h3> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navkids;
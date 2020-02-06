import React from 'react';

class Navkids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="cbexpandedcontainer" onMouseLeave={() => this.props.hideNav()}>
        <div className="cbtitlekids">
          <a className="cbmenulinkblack" href="#">KIDS</a>
        </div>
        <div className="cbmaincontainerkids">
          <div className="cbmainline">
            <div className="cbcolumn">
              <h3 className="cbtitle">TRENDING</h3>
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
            <div className="cbcolumn">
              <h3 className="cbtitle">YOUTH</h3>
              <h3 className="cbsubtitle">(AGE 8-14)</h3>
              <ul>
                <li>Boys Shoes</li>
                <li>Girls Shoes</li>
                <li>Boys Clothing</li>
                <li>Girls Clothing</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <h3 className="cbtitle">CHILDREN</h3>
              <h3 className="cbsubtitle">(AGE 4-8)</h3>
              <ul>
                <li>Boys Shoes</li>
                <li>Girls Shoes</li>
                <li>Boys Clothing</li>
                <li>Girls Clothing</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="cbcolumn">
            <h3 className="cbtitle">BABY & TODDLERS</h3>
            <h3 className="cbsubtitle">(AGE 0-4)</h3>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <h3 className="cbtitle">SALE</h3>
              <ul>
                <li>Youth (Age 8-14)</li>
                <li>Children (Age 4-8</li>
                <li>Baby & Toddler (Age 0-4)</li>
                <li><hr /></li>
                <li>Less than $30</li>
                <li>Less than $50</li>
              </ul>
            </div>
            <div className="cbcolumn">
              {/* <h3 className="cbtitle">COLLECTIONS</h3> */}
            </div>
          </div>
          <div className="cbbottomtextcontainer">
            <p className="cbbottomtext"></p>
            <p className="cbbottomtext">All Youth</p>
            <p className="cbbottomtext">All Children</p>
            <p className="cbbottomtext">All Baby & Toddler</p>
            <p className="cbbottomtext">All Kid's Sale</p>
            <p className="cbbottomtext"></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Navkids;
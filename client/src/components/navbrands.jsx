import React from 'react';

class Navbrands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="cbexpandedcontainer">
        <div className="cbtitlebrands">
          <a className="cbmenulinkblack" href="#">BRANDS</a>
        </div>
        <div className="cbmaincontainerbrands">
          <div className="cbmainline">
            <div className="cbcolumn">
              <img className="cbbrandicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/originals.png"></img>
              <img src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/originals2.jpg"></img>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li>New Arrivals</li>
                <li><hr/></li>
                <li>YEEZY</li>
                <li>adicolor</li>
                <li>Home Of Classics</li>
                <li><hr/></li>
                <li className="cbbold">All adidas Originals</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <img className="cbbrandicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/ivypark.jpg"></img>
              <img src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/ivypark2.jpg"></img>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li><hr/></li>
                <li className="cbbold">All adidas x IVY PARK</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <img className="cbbrandicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/stella.png"></img>
              <img src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/stella2.jpg"></img>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li><hr/></li>
                <li>Tennis</li>
                <li>Training</li>
                <li><hr /></li>
                <li className="cbbold">All adidas by Stella McCartney</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <img className="cbbrandicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/y3.png"></img>
              <img src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/y32.jpg"></img>
              <ul>
                <li><hr/></li>
                <li className="cbbold">All Y-3</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <img className="cbbrandicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/plastic.jpg"></img>
              <img src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/plastic2.jpg"></img>
              <ul>
                <li>Products made with ocean plastic</li>
                <li>Products made with recycled polyester</li>
                <li><hr /></li>
                <li className="cbbold">All products made with recycled materials</li>
              </ul>
            </div>
            <div className="cbcolumn">
              <h3 className="cbtitle">COLLECTIONS</h3>
              <ul>
                <li>IVY PARK</li>
                <li>Ultraboose</li>
                <li>NMD</li>
                <li>Continental 80</li>
                <li>Nite Jogger</li>
                <li>Superstar</li>
                <li>Stan Smith</li>
                <li>adilette</li>
                <li>Nemeziz</li>
                <li>Predator</li>
                <li>Samba</li>
                <li>Copa</li>
                <li>Ozweego</li>
                <li>Nizza</li>
                <li>Supercourt</li>
                <li><hr /></li>
                <li>adicolor Clothing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbrands;
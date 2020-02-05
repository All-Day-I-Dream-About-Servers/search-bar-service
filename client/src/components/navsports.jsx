import React from 'react';

class Navsports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="expandedcontainer">
        <div className="titlesports">
          <a className="menulinkblack" href="#">SPORTS</a>
        </div>
        <div className="maincontainersports">
          <div className="mainline">
            <div className="column">
              <h3 className="title">RUNNING</h3>
              <img className="sportsicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/running.jpg"></img>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li><hr/></li>
                <li>Ulraboost</li>
                <li>Alphabounce</li>
                <li>Pulseboost</li>
                <li><hr/></li>
                <li className="bold" className="bold">All Running</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">SOCCER</h3>
              <img className="sportsicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/soccer.jpg"></img>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li><hr/></li>
                <li>Predator</li>
                <li>X</li>
                <li>Nemeziz</li>
                <li>Copa</li>
                <li><hr/></li>
                <li className="bold">All Soccer</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">OUTDOOR</h3>
              <img className="sportsicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/outdoor.jpg"></img>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
                <li><hr/></li>
                <li>Hiking</li>
                <li>Trail Running</li>
                <li>Mountain Biking</li>
                <li>Climbing</li>
                <li><hr/></li>
                <li>TERREX</li>
                <li>adidas Five Ten</li>
                <li><hr/></li>
                <li className="bold">All Outdoor</li>
              </ul>
            </div>
            <div className="column">
            <h3 className="title">BASKETBALL</h3>
            <img className="sportsicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/basketball.jpg"></img>
              <ul>
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li><hr/></li>
                <li>James Harden</li>
                <li>Damian Lillard</li>
                <li>Donovan Mitchell</li>
                <li><hr /></li>
                <li className="bold">All Basketball</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">FOOTBALL</h3>
              <img className="sportsicon" src="https://alldayidreamaboutservers.s3-us-west-1.amazonaws.com/football.jpg"></img>
              <ul>
                <li>Cleats</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li><hr/></li>
                <li>Comporession</li>
                <li>Freak Cleats</li>
                <li>Adizero Cleats</li>
                <li><hr /></li>
                <li className="bold">All Football</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">OTHER SPORTS</h3>
              <ul>
                <li>Training</li>
                <li>Snowboarding</li>
                <li>Hockey</li>
                <li>Baseball</li>
                <li>Skateboarding</li>
                <li>Golf</li>
                <li>Yoga</li>
                <li>Tennis</li>
                <li>Lacrosse</li>
                <li>Volleyball</li>
                <li>Weightlifting</li>
                <li>Boxing</li>
                <li>Swim</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navsports;
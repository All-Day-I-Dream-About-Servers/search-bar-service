import React from 'react';
import Navbar from './navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return(
      <div>
        <div className="navBack">
          <Navbar />
        </div>
        {/* <p></p>
        <h1>Hello from App Component!</h1> */}
      </div>
    );
  };
};

export default App;
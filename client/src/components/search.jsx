import React from 'react';
import Axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showresults: false,
      allShoes: [],
      name: '',
      results: [],
      resultsbox: false
    };
    this.geShoes = this.getShoes.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.addToResults = this.addToResults.bind(this);
  };
  componentDidMount() {
    this.getShoes();
  }
  
  getShoes() {
    Axios.get('/shoes')
      .then((list) => {
        this.setState({
          allShoes: list.data
        })
      })
      .catch((err) => console.error(err));
  }

  onSearch(e) {
    var queries = e.target.value.split(' ');
    console.log(queries)
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.filterSearch());
  }

  filterSearch() {
    var shoes = this.state.allShoes;
    var newResults = [];
    for (var i = 0; i < shoes.length; i++) {
      shoes[i].categories.forEach((category) => {
        if (this.state.name.length > 2 && category.toLowerCase().includes(this.state.name.toLowerCase())) {
          newResults.push(shoes[i]);
        }
      })
      if (this.state.name.length > 2 && ( shoes[i].color.toLowerCase().includes(this.state.name.toLowerCase()) || shoes[i].name.toLowerCase().includes(this.state.name.toLowerCase()) )) {
        if (newResults.length < 1) {
          newResults.push(shoes[i]);
        } else {
          for (var j = 0; j < newResults.length; j++) {
            if (newResults.includes(shoes[i])) {
              continue;
            } else {
              newResults.push(shoes[i]);
            }
          }
        }
      }
    }
    this.setState({
      results: newResults
    }, () => {
      console.log(this.state);
      if (this.state.results.length > 2) {
        this.setState({
          resultsbox: true
        });
      } else {
        this.setState({
          resultsbox: false
        });
      }
    })
  }

  addToResults(matched) {
    var currentResults = this.state.results;
    for (var k = 0; k < currentResults.length; k++) {
      if (currentResults[k].sku === matched.sku) {
        return;
      } else {
        this.setState({
          results: this.state.results.push(matched)
        });
      }
    }
  }

  render() {
    return(
      <div>
        <form className="searchcontainer">
          <input type="search" name="name" className="searchbar" placeholder="Search" onChange={this.onSearch}></input>
        </form>
        {this.state.resultsbox ? (
          <div className="resultsContainer">
            <div className="inner innerleft">
              <h2>Suggestions</h2>
              <div className="suggestions">
                <div className="suggestionsrow">
                  <p><span className="searchterm">{this.state.name.toUpperCase()}</span></p>
                  <p>{Math.floor(Math.random() * 150)}</p>
                </div>
                <div className="suggestionsrow">
                  <p><span className="searchterm">{this.state.name.toUpperCase()}</span> SHOES</p>
                  <p>{this.state.results.length}</p>
                </div>
                <div className="suggestionsrow">
                  <p><span className="searchterm">{this.state.name.toUpperCase()}</span> PANTS</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="suggestionsrow">
                  <p><span className="searchterm">{this.state.name.toUpperCase()}</span> JACKET</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="suggestionsrow">
                  <p>NEW YORK <span className="searchterm">{this.state.name.toUpperCase()}</span> BULL</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="suggestionsrow">
                  <p><span className="searchterm">{this.state.name.toUpperCase()}</span> WOMEN SHOES</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="suggestionsrow">
                  <p><span className="searchterm">{this.state.name.toUpperCase()}</span> HOODIE</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="suggestionsrow">
                  <p>WOMEN <span className="searchterm">{this.state.name.toUpperCase()}</span></p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="suggestionsrow">
                  <p><span className="searchterm">{this.state.name.toUpperCase()}</span> NMD</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
              </div>
              <p className="seeall">SEE ALL "{this.state.name.toUpperCase()}"</p>
            </div>
            <div className="inner innerright">
              <h2>Products</h2>
              {this.state.results.map((shoe) => {
                return <div className="oneShoe">
                    <img className="resultsImage" src={shoe.image}></img>
                    <div className="shoedescription">
                      <p className="shoecategories">{shoe.categories[0]}</p>
                      <p className="shoeName">{shoe.name}</p>
                      <p className="shoeprice">${shoe.price}</p>
                    </div>
                  </div>
              })}
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
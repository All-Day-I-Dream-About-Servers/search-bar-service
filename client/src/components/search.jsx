import React from 'react';
import Axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    Axios.get('http://54.67.116.40')
      .then((list) => {
        this.setState({
          allShoes: list.data
        })
      })
      .catch((err) => console.error(err));
  }

  onSearch(e) {
    var queries = e.target.value.split(' ');
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
      if (this.state.results.length > 0) {
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
      <div onMouseEnter={() => this.props.hidecart()}>
        <form className="cbsearchcontainer">
          <input type="search" name="name" className="cbsearchbar" placeholder="Search" onChange={this.onSearch}></input>
        </form>
        {this.state.resultsbox ? (
          <div className="cbresultsContainer">
            <div className="cbinner cbinnerleft">
              <h2>Suggestions</h2>
              <div className="cbsuggestions">
                <div className="cbsuggestionsrow">
                  <p><span className="cbsearchterm">{this.state.name.toUpperCase()}</span></p>
                  <p>{Math.floor(Math.random() * 150)}</p>
                </div>
                <div className="cbsuggestionsrow">
                  <p><span className="cbsearchterm">{this.state.name.toUpperCase()}</span> SHOES</p>
                  <p>{this.state.results.length}</p>
                </div>
                <div className="cbsuggestionsrow">
                  <p><span className="cbsearchterm">{this.state.name.toUpperCase()}</span> PANTS</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="cbsuggestionsrow">
                  <p><span className="cbsearchterm">{this.state.name.toUpperCase()}</span> JACKET</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="cbsuggestionsrow">
                  <p>NEW YORK <span className="cbsearchterm">{this.state.name.toUpperCase()}</span> BULL</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="cbsuggestionsrow">
                  <p><span className="cbsearchterm">{this.state.name.toUpperCase()}</span> WOMEN SHOES</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="cbsuggestionsrow">
                  <p><span className="cbsearchterm">{this.state.name.toUpperCase()}</span> HOODIE</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="cbsuggestionsrow">
                  <p>WOMEN <span className="cbsearchterm">{this.state.name.toUpperCase()}</span></p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
                <div className="cbsuggestionsrow">
                  <p><span className="cbsearchterm">{this.state.name.toUpperCase()}</span> NMD</p>
                  <p>{Math.floor(Math.random() * 20)}</p>
                </div>
              </div>
              <p className="cbseeAll"><span>SEE ALL "{this.state.name.toUpperCase()}"</span></p>
            </div>
            <div className="cbinner cbinnerright">
              <h2>Products</h2>
              {this.state.results.map((shoe) => {
                return <div className="cboneShoe">
                    <img className="cbresultsImage" src={shoe.image}></img>
                    <div className="cbshoedescription">
                      <div>
                      {shoe.categories.map((category) => {
                        return <span className="cbshoecategories">{category} </span>
                      })}
                      </div> 
                      <p className="cbshoeName"><a href={`http://3.101.29.112/` + (shoe.sku)}>{shoe.name}</a></p>
                      <p className="cbshoeprice">
                        {shoe.sale > 0 ? (
                          <span>
                            <span className="cbsaleprice">${(shoe.price - (shoe.price * (shoe.sale * 0.01)))} </span>
                            <span className="cbslashprice">${shoe.price}</span>
                          </span>
                        ) : `$${shoe.price}`}
                      </p>
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

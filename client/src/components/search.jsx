import React from 'react';
import Axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showresults: false,
      allShoes: [],
      name: '',
      results: []
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
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.filterSearch());
  }

  filterSearch() {
    var shoes = this.state.allShoes;
    var newResults = this.state.results;
    for (var i = 0; i < shoes.length; i++) {
      if (this.state.name.length > 2 && shoes[i].color.toLowerCase().includes(this.state.name.toLowerCase())) {
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
    }, () => console.log(this.state))
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
      <form>
        <input type="text" name="name" className="searchbar" placeholder="Search" onChange={this.onSearch}></input>
      </form>
    )
  }
}
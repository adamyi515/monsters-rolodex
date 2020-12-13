import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFields: ''
    };
  }


  // Methods
  changeHandler = ev => {
    this.setState({searchFields: ev.target.value});
  }


  componentDidMount() {
    let response = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }


  render() {
    console.log('Before rendering component');

    const { monsters, searchFields } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFields.toLowerCase());
    });


    // return() method is coming from React, which is part of JSX
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search for monsters' changeHandler={this.changeHandler}>
        </SearchBox>

        <CardList monsters={filteredMonsters} >
        </CardList>

      </div>
    );
  }
}

export default App;

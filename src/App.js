import React, {Component} from 'react';
import logo from './logo.svg';
import {CardList} from './Components/card-list/card-list.component'
import './App.css';
import {SearchBox} from './Components/search-box/search-box.component'

class App extends Component {
  constructor (){
    super();

    this.state={
      monsters:[],
      searchField:''
    };
    this.handleChange= this.handleChange.bind(this);
  }


componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response =>response.json())
  .then(users =>this.setState({monsters:users}));
}


handleChange(e){
  this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters= monsters.filter(monster=>
      monster.email.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(searchField.toLowerCase());
  return (

    <div className="App">
    
     
        <SearchBox
        type="search"
        placeholder="search monsters" 
        handleChange={e=> this.setState({searchField:e.target.value})}/>
   

      <CardList monsters={filteredMonsters}>
      </CardList>
    </div>
    
  );
}
}


export default App;

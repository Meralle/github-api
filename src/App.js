import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fetch from './Components/Fetch';

class App extends Component {
  constructor(props){
    super(props);
        this.state={
         userdata:"",
         username:""
        }
}

  getRepos = (e) => {
      fetch(`https://api.github.com/users/${this.state.username}/repos`)
      .then(response => {
        console.log(response)
        return response.json()
  })
      .then(data => {
        console.log(data);
        this.setState({userdata:data})
        // console.log(this.state.userdata)
        
  })
      .catch(err =>{
        console.error('Fetch error', err)
  });

} 

handleChange = (e) => {
  this.setState({username :e.target.value})
}
handleAdd = (e) => {
  e.preventDefault();
  this.getRepos();

}
changeTitle = (e) => {
     console.log(e.target.value)
    this.setState({title : e.target.value})
  }
 render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
       <Fetch userdata={this.state.userdata}
              handleChange={this.handleChange} 
              title={this.state.title}
              changeTitle={this.changeTitle}
              handleAdd={this.handleAdd}
              username={this.state.username}
              value={this.state.userdata}/>
      </div>
    );
  }
}

export default App;

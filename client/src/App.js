import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch('/api/post')
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data.info.posts
        });
      })  
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>列表:</p>
        <ul>
          {
            this.state.posts.map((item,i) => {
              return <li key={i}>{item.title}</li> 
            })
          }
        </ul>
      </div>
    );
  }
  
}

export default App;

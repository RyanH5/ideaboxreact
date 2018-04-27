import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import CardContainer from './components/cardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
    this.addIdea = this.addIdea.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
  }

  addIdea(ID, Title, Body) {
    let newIdea = {
      ID: ID,
      Title: Title,
      Body
    }

    localStorage.setItem(ID, JSON.stringify(newIdea));

    this.setState({
      ideas: [...this.state.ideas, newIdea]});
  }

  

  deleteIdea(ID) {
    localStorage.removeItem(ID);

    let storageKeys = Object.keys(localStorage)
    let storedIdeas = []
    storageKeys.forEach(key => {
      storedIdeas.push(JSON.parse(localStorage.getItem(key)))
    })

    this.setState({
      ideas: storedIdeas
    })
  }

  componentDidMount() {
   let storageKeys = Object.keys(localStorage)
    let storedIdeas = []
    storageKeys.forEach(key => {
      storedIdeas.push(JSON.parse(localStorage.getItem(key)))
    })

    this.setState({
      ideas: storedIdeas
    })
  }

  render() {
    return (
      <div 
        className="App">
        <header 
          className="App-header">
          <h1 
            className="App-title">
          idea
          <span 
            className="title-span">
          box</span>
          </h1>
          <Form 
            addIdea={this.addIdea} />
        </header>
        <main>          
          <CardContainer 
            ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
        </main>
      </div>
    );
  }
}

export default App;

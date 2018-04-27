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
    this.addIdea = this.addIdea.bind(this)
  }

  addIdea(ID, Title, Body) {
    let newIdea = {
      ID: ID,
      Title: Title,
      Body
    }

    this.setState({
      ideas: [...this.state.ideas, newIdea]})
  }

  deleteIdea(id) {

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
            ideas={this.state.ideas} />
        </main>
      </div>
    );
  }
}

export default App;

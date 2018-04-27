import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      body: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.submitIdea = this.submitIdea.bind(this);
  }

  handleInput(event) {
    let key = event.target.name
    this.setState({[key]: event.target.value})
  }

  // ALTERNATIVE
  // handleInput = (e) => {
  //   const {name, value} = e.target;
  //   this.setState({this.state[name]: value})
  // }

  submitIdea(e) {
    e.preventDefault();
    this.props.addIdea(
      Date.now(),
      this.state.title,
      this.state.body
    );
  }

  render() {
    return (
      <div className="control-component">
        <input 
          type="text" 
          className="title" 
          value={this.state.title}
          onChange={this.handleInput}
          name="title"
          placeholder="Title" 
        />
        <input 
          type="text"
          className="body"
          value={this.state.body} 
          onChange={this.handleInput}
          name="body" 
          placeholder="Body"
        />
        <input 
          type="submit"
          className="submit-btn"
          onClick={this.submitIdea} 
        />
      </div>
    )
  }
}

export default Form;
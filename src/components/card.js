import React, { Component } from 'react';

const Card = (props) => {
  return (
    <div>
      <h1>{this.props.title}</h1>
      <h3>{this.props.body}</h3>
      <button 
        className="deleteBtn"
        onClick={this.props.deleteIdea}>
        x
      </button>
    </div>
  )
}

export default Card;
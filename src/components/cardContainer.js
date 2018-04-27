import React, { Component } from 'react';
import Card from './card';

const CardContainer = (props) => {
      console.log(props)
  const allIdeas = props.ideas.map((idea, index) => {
    return <Card {...idea} key={index} deleteIdea={props.deleteIdea} />
  })

  return(
    <div>
      {allIdeas}
    </div>
  )
}

export default CardContainer;
import React, { Component } from 'react';
import Card from './card';

const CardContainer = (props) => {
  const allIdeas = props.ideas.map(idea => {
    return <Card {...idea} />
  })

  return(
    <div>
      {allIdeas}
    </div>
  )
}

export default CardContainer;
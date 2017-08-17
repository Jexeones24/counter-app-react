import React, { Component } from 'react'

export default class Counter extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.count}
      </div>
    )
  }
}

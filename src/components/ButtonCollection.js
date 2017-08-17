import React, { Component } from 'react'
import Button from './Button'

export default class ButtonCollection extends Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <div>
        <Button value="+" respond={this.props.respond}/>
        <Button value="-" respond={this.props.respond}/>
      </div>

    )
  }
}

import React from 'react'

class Button extends React.Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.props.respond(this.props.value)
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.props.value}</button>
      </div>
    )
  }
}


export default Button

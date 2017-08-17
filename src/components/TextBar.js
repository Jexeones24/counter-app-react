import React from 'react'

export default class TextBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        {this.props.text}
      </div>
    )
  }
}

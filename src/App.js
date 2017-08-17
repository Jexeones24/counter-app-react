import React, { Component } from 'react';
import Counter from './components/Counter'
import ButtonCollection from './components/ButtonCollection'
import TextBar from './components/TextBar'

class App extends Component {
  constructor(){
    super();

    this.state = {
      count: 0,
      text: ''
    }

    this.respond = this.respond.bind(this)
  }

  addOne(){
    let count = this.state.count + 1
    this.setState({ count, text: "You have just increased by 1"
    })
  }

  minusOne(){
    console.log('minus')
    let count = this.state.count - 1
    this.setState({
      count, text: "You have just decreased by 1"
    })
  }

  respond(e){
    if(e === "+" ){
      this.addOne()
    } else {
      this.minusOne()
    }
  }

  render() {
    return (
      <div className="App">
      <Counter count={this.state.count}/>
      <ButtonCollection respond={this.respond}/>
      <TextBar text={this.state.text}/>
      </div>
    );
  }
}

export default App;

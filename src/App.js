import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component{
  constructor(props){
    super(props)
    this.borderColor = '#09f'
  }

  render(){
    return(
      <button style={ {borderColor: this.borderColor, display: 'block'} }>{this.props.label}</button>
    )
  }
}

class ButtonDanger extends Button{
  constructor(props){
    super(props)
    this.borderColor = 'red'
  }
}

class ButtonWithLegend extends Button{
  render(){
    return (
      <div>
        {super.render()}
        <small>{this.props.legend}</small>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Composicion vs Herencia</h4>
        <Button label="Dar Click"/>
        <br/>
        <ButtonDanger label="Cuidado !!" />
        <br />
        <ButtonWithLegend label="Dar Click" legend="explicacion" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component{
  render(){
    return(
      <button style={ {borderColor: this.props.borderColor, display: 'block'} }>{this.props.label}</button>
    )
  }
}

Button.defaultProps = {
  borderColor = '#09f'
}

class ButtonDanger extends Component{
  render(){
    return(
      <Button borderColor='red' label={this.props.label}/>
    )
  }
}

class ButtonWithLegend extends Component{
  render(){
    return (
      <div>
        <Button borderColor={this.props.borderColor} label={this.props.label}/>
        <small>{this.props.legend}</small>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Composicion</h4>
        <Button label="Dar Click aqui con composicion"/>
        <br/>
        <ButtonDanger label="Cuidado con composicion!!" />
        <br />
        <ButtonWithLegend label="Boton explicacion composicion" legend="explicacion" />
      </div>
    );
  }
}

export default App;

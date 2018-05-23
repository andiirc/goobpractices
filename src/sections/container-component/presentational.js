import React, { Component } from 'react'

/*class BitCoinPrice extends Component{

  __renderCurrencies(){
    const { bpi } = this.props
    return Object.keys(bpi).map(currency =>
      ( <div key={currency} >
           1 BTC is { bpi[currency].rate }
           <span>{ bpi[currency].code }</span>
        </div>
      )
    )
  }

  render(){
    return(
      <div>
        <h4>Bitcoin Price Index</h4>
        {this.__renderCurrencies()}
      </div>
    )
  }
}*/

const _renderCurrencies = (bpi) => (
   Object.keys(bpi).map(currency => (
      <div key={currency}>
        1 BTC is {bpi[currency].rate}
        <span> {bpi[currency].code} </span>
      </div>
  ))
)

const BitCoinPrice = ({bpi}) =>
(  <div>
      <h4>Bitcoin Price Index</h4>
      {_renderCurrencies(bpi) }
    </div>
)

export default BitCoinPrice

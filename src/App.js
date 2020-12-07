import React from 'react'
import './App.css';//style app here
import Header from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    background-color:#61DBFB;
    color: rgb(15, 10, 10);
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 18966
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 593
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.62
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 239
        }
      ]
    }
  }
  render() {
    return (
      <Div className="App">
        <Header/>
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData}/>
      </Div>
    );
  }
}

 /*props are optional */
export default App;

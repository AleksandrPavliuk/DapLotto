  import React, { Component } from 'react';
  import './App.css';
  import { getWeb3 } from './utils/web3.js';
  import { getContractInstance } from './utils/contract';



  class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
        isFormShowing: false,
        selectedNumber: 0,
        accountAddress: '',
        amount: 0,
    };
  }

  handleNumberButtonClick(number) {
  this.setState(state => ({
    isFormShowing: true,
    selectedNumber: number
  }));
  }

  handleCancelButtonClick() {
  this.setState(state => ({
    isFormShowing: false
  }));
  }

  handleOkButtonClick() {
  this.setState(state => ({
    isFormShowing: false
  }));

  console.log("handleOkButtonClick");

  const web3 = getWeb3();

  const contract = getContractInstance();

  console.log(getContractInstance)

  let number = this.state.selectedNumber;
  let player = this.state.accountAddress
  let amount = 10000;
  try {
    contract.pickNumber(
      number,
      {
        from: player,
        value: web3.toWei(amount, 'finney'),
        gas: 1000000,
      },
      (error, result) => {
        if (error) {
          console.log(error)
        } else {
          console.log(result)
        }
      },
    );
  } catch (error) {
    console.log(error)
  }
  }

  createSelectItems() {
    const web3 = getWeb3();
    let items = [];         
    web3.eth.accounts.forEach(function(element) {
      items.push(<option key={element} value={element}>{element}</option>);
    });

     return items;
  }
  
  onDropdownSelected(element) {
  console.log("THE VAL", element.target.value);
  }

  render() {
  return (
    <div className="App">
     <h1>Decentralized Lotto</h1>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 1) } className="btn btn-primary">1</button>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 2) } className="btn btn-primary">2</button>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 3) } className="btn btn-primary">3</button>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 4) } className="btn btn-primary">4</button>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 5) } className="btn btn-primary">5</button>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 6) } className="btn btn-primary">6</button>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 7) } className="btn btn-primary">7</button>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 8) } className="btn btn-primary">8</button>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 9) } className="btn btn-primary">9</button>
      <button href="#" onClick={ this.handleNumberButtonClick.bind(this, 10) } className="btn btn-primary">10</button>

      { this.state.isFormShowing ? 
        <form className="form mt-5" id="selectForm">
          <div className="form-group d-flex align-items-start">
            <button href="#" id="selectFormButton" className="btn btn-primary mr-4 mt-2"></button>
            <div className="flex-fill">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Address</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={this.onDropdownSelected}>
                {this.createSelectItems()}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Amount</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="100" />
              </div>
            </div>
          </div>
          <button href="#" onClick={ this.handleCancelButtonClick.bind(this) } className="btn btn-primary">Cancel</button>
          <button type="submit" onClick={ this.handleOkButtonClick.bind(this) } className="btn btn-primary">Ok</button>
        </form> : null
      }
    </div>
  );
  }
  }

  export default App;

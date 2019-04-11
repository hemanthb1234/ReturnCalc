import React, { Component } from 'react';



class Main extends React.Component {
  constructor(){
    super();
   
    this.state = {
      savings: 0,
      NumTickets: 0,
      Cost: 0,
      Investment: 0,
      Hours: 0,
      Time: 0
    }
  };
  
  computeROI(){
    const totalTicketTime = this.state.NumTickets*this.state.Time;
    const numWorkers = totalTicketTime/this.state.Hours;
    const amountSaved = this.state.Cost*this.state.savings;
    const returnInvestment = (amountSaved-this.state.Investment)/this.state.Investment;
    alert('Your ROI is ' + (returnInvestment*100) +'% The number of workers you need is ' + numWorkers);

  }
  render() {
    return (
      <div>
         <div className = "time">
               <form>
        <label>
       Time per Ticket(in Hours):
        </label>
        <input defaultValue = "0" type="number" onChange={e => this.setState({Time: e.target.value})}/>
       
        </form>
        </div>
        <div className = "Name">
        <form>
<         label>
               Number of Tickets Per Month:
              </label>
              <input defaultValue = "0" type="number" onChange={e => this.setState({NumTickets: e.target.value})}/>

              </form>
              </div>
              
               <div className = "hours">
               <form>
               <label>
               Working Hours Per Person Per Month:
               </label>
               <input defaultValue = "0" type="number" onChange={e => this.setState({Hours: e.target.value})}/>
              
               </form>
               </div>
    <div className = "cost">
    <form>
      <label>
      Annual Cost Per One Support Person:
    </label>
     <input defaultValue = "0" type="number" onChange={e => this.setState({Cost: e.target.value})}/>
      </form>
               </div>
      <div className = "saving">
      <form>
        <label>
          Persons Saving Factor:
        </label>
        <input  defaultValue = "0" type="number" onChange={e => this.setState({savings: e.target.value})}/>
       
        </form>
        </div>
       
              
              <div className ="invest">
               <form>
               <label>
                 Company Investment($):
               </label>
               <input  defaultValue = "0" type="number" onChange={e => this.setState({Investment: e.target.value})} />
               </form>
               </div>
               <div className = "submit">
               <a onClick = {(e) => {e.preventDefault(); this.computeROI();}}>Calculate</a>
               </div>
               </div>
    );
  }
}
export default Main;
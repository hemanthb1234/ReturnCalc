import React, { Component } from 'react';



class Main extends React.Component {
  constructor(){
    super();
   
    this.state = {
      //savings factor
      savings: 0,
      //number of tickets in a  month
      NumTickets: 0,
      //cost of one support person
      Cost: 0,
      //Company's investment
      Investment: 0,
      //Hours that one support person works for
      Hours: 0,
      //time it takes to complete one ticket
      Time: 0
    }
  };
  //Method to output the ROI and the number of workers needed
  computeROI(){
    //sets a variable equal to the total time it will take to complete all tickets in a month
    const totalTicketTime = this.state.NumTickets*this.state.Time;
    //sets a variable equal to the total time it will take to complete all tickets in a month dividede by the number of hours one support person works
    const numWorkers = totalTicketTime/this.state.Hours;
    //sets a variable equal to the cost of one support person times the persons saving factor
    const amountSaved = this.state.Cost*this.state.savings;
    //sets the returnInvestment variable equal to the amount saved subtracted by the companys investment divided by the companys investment
    const returnInvestment = (amountSaved-this.state.Investment)/this.state.Investment;
    //returns an alert that states the ROI and the number of workers needed
    alert('Your ROI is ' + (returnInvestment*100) +'% The number of workers you need is ' + numWorkers);

  }
  render() {
    return (
      <div>
       {/* Form for time it takes to complete one ticket*/}
        <form>
        <h4 className = "timelabel">
       Time per Ticket(in Hours):
        </h4>
        <input defaultValue = "0" type="number" onChange={e => this.setState({Time: e.target.value})} className = "time"/>
        </form>
      
        {/* Form for the number of tickets there are per month*/}
        <form>
               <h4 className = "ticketslabel">
               Number of Tickets Per Month:
              </h4>
              <input defaultValue = "0" type="number" onChange={e => this.setState({NumTickets: e.target.value})} className = "tickets"/>
           
             </form>
              
              
             {/* Form for the number of hours that one support person works for a month*/}
              <form>
               <h4 className = "hourslabel">
               Working Hours Per Person Per Month:
               </h4>
               <input defaultValue = "0" type="number" onChange={e => this.setState({Hours: e.target.value})} className = "hours"/>
              </form>
               
              {/* Form for the annual cost of support person*/}
               <form>
      <h4 className = "costlabel">
      Annual Cost Per One Support Person($):
    </h4>
     <input defaultValue = "0" type="number" onChange={e => this.setState({Cost: e.target.value})} className = "cost"/>
      </form>
        {/* Form for persons saving factor*/}      
        
        <form>
        <h4 className = "savinglabel">
          Persons Saving Factor:
        </h4>
        <input  defaultValue = "0" type="number" onChange={e => this.setState({savings: e.target.value})} className = "saving"/>
    
        </form>
        
             {/* Form for the company investment*/}  
             <form>
              
               <h4 className = "investlabel">
                 Company Investment($):
               </h4>
               <input  defaultValue = "0" type="number" onChange={e => this.setState({Investment: e.target.value})} className = "invest"/>
               </form>
               {/* Div for the submit button*/}
               <div className = "submit">
               <a onClick = {(e) => {e.preventDefault(); this.computeROI();}}>Calculate</a>
               </div>
                {/* Help Box*/}
              <div className = "box">
              <p className = "ROIHELP1">
              <a href= "https://www.investopedia.com/terms/r/returnoninvestment.asp"> What is ROI?</a>
              </p>
              <p className = "ROIHELP2">
              <a href= "https://www.investopedia.com/articles/basics/10/guide-to-calculating-roi.asp"> How is ROI calculated? </a>
              </p>
              
              </div>
                <h3 className = "help">
                  Help:
                </h3>

                
             
             
               </div>
    );
  }
}
export default Main;
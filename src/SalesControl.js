import React from "react";
import SalesList from "./SalesList";

class SalesControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          formVisibleOnPage: false,
          ouncesRemaining: "1984"
          // selectedDrink: null,
          // editing: false
        };
      }

      // handleClick = () => {
      //   if (this.state.selectedDrink != null) {
      //     this.setState({
      //       formVisibleOnPage: false,
      //       selectedDrinks: null,
      //       editing: false
      //     });
      //   } else {
      //     this.setState(prevState => ({
      //       formVisibleOnPage: !prevState.formVisibleOnPage,
      //     }));
      //   }
      // } 

      // handleSellingPint = () => {
      //   const newMainSalesList = this.state.mainSalesList - "16";
      //   this.setState({
      //     mainSalesList: newMainSalesList,
      //     selectedDrink: null
      //   })
      // }
      // handleSellingGrowler = () => {
      //   const newMainSalesList = this.state.mainSalesList - "64";
      //   this.setState({
      //     mainSalesList: newMainSalesList,
      //     selectedDrink: null
      //   })
      // }
      // handleSellingSixPack = () => {
      //   const newMainSalesList = this.state.mainSalesList - "72";
      //   this.setState({
      //     mainSalesList: newMainSalesList,
      //     selectedDrink: null
      //   });
      // }



      render(){
        let currentlyVisibleState = null;
        // let buttonText = null;
        <SalesList />
        // if (this.state.selectedDrink != null){
        //   currentlyVisibleState = 
        //   <SalesList
        //   sales = {this.state.selectedDrink}
        //   onClickingPint = {this.handleSellingPint}/>
        //   buttonText = "Pint";
        // }
        // else if (this.state.selectedDrink !=null){
        //   <SalesList
        //   sales = {this.state.selectedDrink}
        //   onClickingGrowler = {this.handleSellingGrowler}/>
        //   buttonText = "Growler";
        // }
        // else if (this.state.selectedDrink !=null){
        //   <SalesList
        //   sales = {this.state.selectedDrink}
        //   onClickingSixPack = {this.handleSellingSixPack}/>
        //   buttonText = "Six-Pack";
        return (
          <React.Fragment>
            {currentlyVisibleState}
            {/* <button onClick={this.handleClick}>{buttonText}</button> */}
          </React.Fragment>
        );
      }
}

export default SalesControl;
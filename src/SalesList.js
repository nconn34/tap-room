import React from "react";
import Sales from "./Sales";


const mainSalesList = [
    {
        // name: DrinkDetails(drink.name),
        serving1: "Pint",
        serving2: "Growler",
        serving3: "Six-Pack"
    }
  ];

function SalesList(){
  return (
    <React.Fragment>
      <hr/>
      {mainSalesList.map((amount, index) =>
      <Sales 
        sales1={amount.serving1}
        sales2={amount.serving2}
        sales3={amount.serving3}
        key={index}/>
        )}
    </React.Fragment>
  );
}

export default SalesList;
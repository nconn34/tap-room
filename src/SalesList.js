import React from "react";
import Sales from "./Sales";


const mainSalesList = [
    {
        ounces: "128"
    }
  ];

function SalesList(){
  return (
    <React.Fragment>
      <hr/>
      {mainSalesList.map((amount, index) =>
      <Sales
        remaining={amount.ounces}
        key={index}/>
        )}
    </React.Fragment>
  );
}

export default SalesList;
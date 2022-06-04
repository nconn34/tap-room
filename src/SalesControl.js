import React from "react";
import SalesList from "./SalesList";

class SalesControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          formVisibleOnPage: false
        };
      }

      render(){
        let currentlyVisibleState = null;
          currentlyVisibleState = <SalesList />;
        return (
          <React.Fragment>
            {currentlyVisibleState}
          </React.Fragment>
        );
      }
}

export default SalesControl;
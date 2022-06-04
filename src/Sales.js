import React from "react";
import PropTypes  from "prop-types";

function Sales(props){
  return (
    <React.Fragment>
      {/* <h3>{props.name}</h3> */}
      {/* <p><em>{props.serving1}</em></p>
      <p><em>{props.serving2}</em></p>
      <p><em>{props.serving3}</em></p> */}
      <p><em>{props.remaining}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Sales.propTypes = {
    // name: PropTypes.string.isRequired,
    // serving1: PropTypes.string.isRequired,
    // serving2: PropTypes.string.isRequired,
    // serving3: PropTypes.string.isRequired,
    remaining: PropTypes.string.isRequired
  };

export default Sales;
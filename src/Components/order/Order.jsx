import React from "react";
import Ordercom from "./Ordercom";
import Orderdata from "./Orderdata";

const Order = () => {
  function tcard(val) {
    return (
      <Ordercom
        tablespan={val.tablespan}
        tableimg={val.tableimg}
        tablemade={val.tablemade}
        tabelproducts={val.tabelproducts}
        tabledate={val.tabledate}
        tablejohn={val.tablejohn}
        tabledollor={val.tabledollor}
        tablemaster={val.tablemaster}
        tableprocessing={val.tableprocessing}
        tabledelivered={val.tabledelivered}
        tablecancelled={val.tablecancelled}
        tableshiped={val.tableshiped}
      />
    );
  }

  return (
    <div>
      <Ordercom Orderdata={Orderdata} />
      {/* {Orderdata.map(tcard)} */}
      {/* <Ordercom/> */}
    </div>
  );
};

export default Order;

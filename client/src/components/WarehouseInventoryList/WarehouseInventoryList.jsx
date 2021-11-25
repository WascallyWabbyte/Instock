// import { Component } from "react";
// import axios from "axios";
import WarehouseInventoryItemCard from "../WarehouseInventoryItemCard/WarehouseInventoryItemCard";

import "./WarehouseInventoryList.scss";

function WarehouseInventoryList({ inventory }) {
  if (inventory === null) {
    return (
      <div>
        <h1 className="loading">Loading inventory...</h1>
      </div>
    );
  }
  return (
    <section className="warehouse-inventory">
      <div className="warehouse-inventory__column-labels">
        <div className="warehouse-inventory__column-heading--item">
          <h4>INVENTORY ITEM</h4>
          <img src="http://localhost:8080/sort-24px.svg" alt="sort icon"></img>
        </div>
        <div className="warehouse-inventory__column-heading--category">
          <h4>CATEGORY</h4>
          <img src="http://localhost:8080/sort-24px.svg" alt="sort icon"></img>
        </div>
        <div className="warehouse-inventory__column-heading--status">
          <h4>STATUS</h4>
          <img src="http://localhost:8080/sort-24px.svg" alt="sort icon"></img>
        </div>
        <div className="warehouse-inventory__column-heading--qty">
          <h4>QUANTITY</h4>
          <img src="http://localhost:8080/sort-24px.svg" alt="sort icon"></img>
        </div>
        <div className="warehouse-inventory__column-heading--actions">
          <h4>ACTIONS</h4>
        </div>
      </div>
      {inventory.map((item) => {
        return <WarehouseInventoryItemCard item={item} key={item.id} />;
      })}
    </section>
  );
}

export default WarehouseInventoryList;

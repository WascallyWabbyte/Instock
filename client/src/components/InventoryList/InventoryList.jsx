import { Component } from "react";
import axios from "axios";
import InventoryItemCard from "../InventoryItemCard/InventoryItemCard";
import PageHeadingBar from "../PageHeadingBar/PageHeadingBar";
import "./InventoryList.scss";

class InventoryList extends Component {
  state = {
    inventory: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/inventory").then((response) => {
      this.setState({ inventory: response.data });
    });
  }

  render() {
    if (this.state.inventory.length !== 0) {
      return (
        <section className="inventory">
          <PageHeadingBar heading="Inventory" buttonText="+ Add New Item" prevUrl={this.props.match.url}/>
          <div className="inventory__column-labels">
            <div className="inventory__column-heading--item">
              <h4>INVENTORY ITEM</h4>
              <img
                src="http://localhost:8080/sort-24px.svg"
                alt="sort icon"
              ></img>
            </div>
            <div className="inventory__column-heading--category">
              <h4>CATEGORY</h4>
              <img
                src="http://localhost:8080/sort-24px.svg"
                alt="sort icon"
              ></img>
            </div>
            <div className="inventory__column-heading--status">
              <h4>STATUS</h4>
              <img
                src="http://localhost:8080/sort-24px.svg"
                alt="sort icon"
              ></img>
            </div>
            <div className="inventory__column-heading--qty">
              <h4>QTY</h4>
              <img
                src="http://localhost:8080/sort-24px.svg"
                alt="sort icon"
              ></img>
            </div>
            <div className="inventory__column-heading--warehouse">
              <h4>WAREHOUSE</h4>
              <img
                src="http://localhost:8080/sort-24px.svg"
                alt="sort icon"
              ></img>
            </div>
            <div className="inventory__column-heading--actions">
              <h4>ACTIONS</h4>
            </div>
          </div>
          {this.state.inventory.map((entry) => {
            return <InventoryItemCard item={entry} key={entry.id} />;
          })}
        </section>
      );
    } else
      return (
        <section className="inventory">
          <PageHeadingBar heading="Inventory" buttonText="+ Add New Item" prevUrl={this.props.match.url}/>
        </section>
      );
  }
}

export default InventoryList;

import { Component } from "react";
import axios from "axios";
import PageHeadingBar from "../PageHeadingBar/PageHeadingBar";
import "./InventoryDetails.scss";

class InventoryDetails extends Component {
  state = {
    selectedInventory: null,
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/inventory/${this.props.match.params.itemId}`
      )
      .then((response) => {
        this.setState({ selectedInventory: response.data });
      });
  }

  render() {
    if (this.state.selectedInventory !== null) {
      return (
        <section className="inventory">
          <PageHeadingBar
            heading={this.state.selectedInventory.itemName}
            buttonText="EDIT"
            prevUrl={this.props.match.url}
          />
          <section className="inventory__info">
            <div className="inventory__description">
              <h4>ITEM DESCRIPTION</h4>
              <p>{this.state.selectedInventory.description}</p>
              <h4>CATEGORY</h4>
              <p>{this.state.selectedInventory.category}</p>
            </div>
            <div className="inventory__stock-details">
              <div className="inventory__stock-details-section">
                <h4>STATUS</h4>
                <p
                  className={`inventory__status${
                    this.state.selectedInventory.status === "In Stock"
                      ? `--instock`
                      : `--outstock`
                  }`}
                >
                  {this.state.selectedInventory.status.toUpperCase()}
                </p>
              </div>
              <div className="inventory__stock-details-section">
                <h4>QUANTITY</h4>
                <p>{this.state.selectedInventory.quantity}</p>
              </div>
              <div className="inventory__stock-details-section">
                <h4>WAREHOUSE</h4>
                <p>{this.state.selectedInventory.warehouseName}</p>
              </div>
            </div>
          </section>
        </section>
      );
    } else return <p>Loading........</p>;
  }
}

export default InventoryDetails;

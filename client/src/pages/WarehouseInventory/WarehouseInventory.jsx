import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import { Component } from "react";
import axios from "axios";

class WarehouseInventory extends Component {
  state = {
    currentSelectedWarehouse: null,
    currentSelectedInventory: null,
  };

  componentDidMount() {
    let warehouseId = this.props.match.params.warehouseId;
    Promise.all([
      axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`),
      axios.get(
        `http://localhost:8080/api/warehouses/${warehouseId}/inventory`
      ),
    ])
      .then(([res1, res2]) => {
        console.log(res1.data);
        console.log(res2.data);
        this.setState({
          currentSelectedWarehouse: res1.data,
          currentSelectedInventory: res2.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { currentSelectedWarehouse, currentSelectedInventory } = this.state;

    if (this.state.currentSelectedWarehouse === null) {
      return (
        <div>
          <h1 className="loading">Loading warehouse...</h1>
        </div>
      );
    }

    return (
      <>
        <WarehouseDetails
          warehouse={currentSelectedWarehouse}
          inventory={currentSelectedInventory}
        />
      </>
    );
  }
}

export default WarehouseInventory;

import './NewInv.scss';
import { Component } from 'react';
import axios from "axios";
import arrowBack from '../../assets/images/arrow_back-24px.svg';
const { v4: uuidv4 } = require('uuid');

class NewInv extends Component {
  state = {
    id: uuidv4(),
    selectedwarehouseID: null,
    selectedwarehouseName: null,
    category: "",
    wareHouseArr: [],
    instock: "",
    quantity: 0,
    itemName: "",
    description: "",
    status: ""
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/warehouses/`)
    .then((response)=> {
        this.setState({
          wareHouseArr: response.data
        })
    })
    .catch((error)=> console.log(error) )
  }

  handleWarehouseChange = (e) => {
    let targetID = e.target.value
    let selectedWarehouse = this.state.wareHouseArr.find((Warehouse) => {
      return Warehouse.id === targetID;
    })
    console.log(selectedWarehouse.name)
    this.setState( {
      selectedwarehouseID: selectedWarehouse.id,
      selectedwarehouseName: selectedWarehouse.name
  })
}

  handleInStock = (e) => {
    this.setState({
      instock: e.target.value
    })
  };

  handleOutStock = (e) => {
    this.setState({
      instock: e.target.value,
      quantity: 0
    })
  };

  handleCatChange = (e) => {
    console.log(this.state.instock)
    console.log(this.state.quantity)
    this.setState({
      category: e.target.value
    })
  }

  handleQuantityChange = (e) => {
    this.setState({
      quantity: e.target.value
    })
  }
  handleItemNameChange = (e) => {
    this.setState({
      itemName: e.target.value
    })
  }
  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.validateForm() ){
      axios.post(`http://localhost:8080/api/inventory/add`, {
        id: this.state.id,
        warehouseID: this.state.selectedwarehouseID,
        warehouseName: this.state.selectedwarehouseName,
        itemName: e.target.itemName.value,
        description: e.target.description.value,
        category: this.state.category,
        status: this.state.instock,
        quantity: this.state.quantity
      })
      .catch((error)=> console.log(error));
    }
  };

  validateInput = (input) => {
    if (!input) {
        return false;
    }
    return true;
  }

  validateForm = () => {
      if (!this.state.itemName) return false;
      if (!this.state.description) return false;
      if (!this.state.quantity) return false;
      return true;
  }

  render() {

    return (
      <main className="form-box">
      <h2 className="form-box__title"><img className="form-box__icon" src={arrowBack} alt="back arrow" />Add Inventory</h2>
        <form className="form" method="post" action="/inventory/add" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-box__inner">
                <h3 className="form-box__title--secondary">Inventory Details</h3>
                <label htmlFor="itemName">Inventory Name</label>
                <input onChange={(e) => this.handleItemNameChange(e)} className={this.validateInput(this.state.itemName)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'} 
                       type="text" name="itemName" placeholder="Item Name" />
                <p className={this.validateInput(this.state.itemName)
                                        ? 'warehouse-form__warning--none'
                                        : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>

                <label htmlFor="description">Description</label>
                <textarea onChange={(e) => this.handleDescriptionChange(e)} className={this.validateInput(this.state.description)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'} 
                type="text" name="description" placeholder="Please enter a brief description..." />
                <p className={this.validateInput(this.state.description)
                                        ? 'warehouse-form__warning--none'
                                        : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>

                <label htmlFor="category">Category</label>
                <select name="category" className="warehouse-form__input" value={this.state.category} onChange={(e) => this.handleCatChange(e)}>
                  <option value="Electronics">Electronics</option>
                  <option value="Gear">Gear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Health">Health</option>
                </select>

            </div>
            {/* <hr className="divider" /> */}
            <div className="form-box__inner form-box__inner--second">
                <h3 className="form-box__title--secondary form-box__title--contact">Item Availability</h3>
                <label htmlFor="status">Status</label>
                <div>
                  <input type="radio" value="In Stock" name="status" onClick={(e) => this.handleInStock(e)} className="addInv__In-Stock"/>In stock
                  <input type="radio" value="Out of Stock" name="status" onClick={(e) => this.handleOutStock(e)} className="addInv__Out-Stock"/>Out of Stock
                </div>
                <label htmlFor="quantity" className={this.state.instock === "In Stock" ? "addInv__show" : "addInv__hide"}>
                  Quantity
                </label>
                <input type="number" onChange={(e) => this.handleQuantityChange(e)} name="quantity" placeholder="0" className={this.validateInput(this.state.instock === "In Stock" ? "addInv__show--input" : "addInv__hide--input")
                                                                                                                                ? 'warehouse-form__input'
                                                                                                                                : 'warehouse-form__input--error'} />
                <p className={this.validateInput(this.state.quantity)
                                        ? 'warehouse-form__warning--none'
                                        : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
                <label htmlFor="WarehouseSelect">Warehouse</label>
                <select className="input" name="WarehouseSelect" placeholder="Please select" 
                onChange={(e) => this.handleWarehouseChange(e)}
                >
                  {/* sends value Warehouse.id into the state. */}
                {this.state.wareHouseArr.map(Warehouse => (<option value={Warehouse.id}>{Warehouse.name}, {Warehouse.city}, {Warehouse.country}</option>))}
                </select>
            </div>

            <div className="form-box__inner--last">
                <input className="button button--cancel" type="submit" name="updates" value="Cancel" />
                <input className="button button--submit" type="submit" name="submit" value="+ Add Item" />
            </div>
        </form>
    </main>

  );
}
};

export default NewInv;
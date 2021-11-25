import axios from 'axios';
import { Component } from 'react';
import WarehouseList from '../../components/WarehouseList/WarehouseList';

class Warehouse extends Component {
  state = {
    whListArr : []
  };

  componentDidMount() {

    axios.get(`http://localhost:8080/api/warehouses/`)
    .then((response)=> {
        this.setState({
          whListArr: response.data
        })
        // console.log(this.state.whListArr);
    })
    .catch((error)=> console.log(error) )
  }

  render() {
    return (
      <>
        {this.state.whListArr && <WarehouseList
          whListArr={this.state.whListArr}
        /> }
      </>
    );
  }
}

export default Warehouse;


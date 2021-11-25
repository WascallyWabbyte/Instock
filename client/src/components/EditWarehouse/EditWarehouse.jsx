import axios from "axios";
import { Component } from "react";
import PageHeadingBar from "../PageHeadingBar/PageHeadingBar";
import WarehouseForm from '../WarehouseForm/WarehouseForm';
import './EditWarehouse.scss'

class EditWarehouse extends Component {
    state = {
        warehouseId: '',
        warehouseName: '',
        streetAddress: '',
        city: '',
        country: '',
        name: '',
        position: '',
        phoneNum: '',
        email: '',
        isDataLoaded: false
    }

    componentDidMount() {
        axios
            .get(`http://localhost:8080/api/warehouses/${this.props.match.params.warehouseId}`)
            .then(response => {
                this.setState({
                    warehouseId: response.data.id,
                    warehouseName: response.data.name,
                    streetAddress: response.data.address,
                    city: response.data.city,
                    country: response.data.country,
                    name: response.data.contact.name,
                    position: response.data.contact.position,
                    phoneNum: response.data.contact.phone,
                    email: response.data.contact.email,
                    isDataLoaded: true
            })
        })
    }
    handleCancel = () => {
        this.forceUpdate();
    }
    
    render() {
        if (!this.state.isDataLoaded) {
            return (
                <section className='edit-warehouse'>
                    <PageHeadingBar heading='Edit Warehouse' buttonText='' prevUrl={this.props.match.url}/>
                </section>
            )
        } else {
            return(
                <section className='edit-warehouse'>
                    <PageHeadingBar heading='Edit Warehouse' buttonText='' prevUrl={this.props.match.url}/>
                    <WarehouseForm warehouseId={this.state.warehouseId}
                                    warehouseName={this.state.warehouseName}
                                    streetAddress={this.state.streetAddress}
                                    city={this.state.city}
                                    country={this.state.country}
                                    name={this.state.name}
                                    position={this.state.position}
                                    phoneNum={this.state.phoneNum}
                                    email={this.state.email}
                                    handleCancel={this.handleCancel}
                                    edit={true}/>  
                </section>
            )
        }
        
    }
}

export default EditWarehouse;
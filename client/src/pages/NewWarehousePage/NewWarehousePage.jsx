import './NewWarehousePage.scss';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import arrowBack from '../../assets/images/arrow_back-24px.svg';
// import NewWarehouse from '../../components/NewWarehouse/NewWarehouse.jsx';
import { Component } from 'react';
import { Redirect } from 'react-router';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import PageHeadingBar from '../../components/PageHeadingBar/PageHeadingBar';

class NewWarehousePage extends Component {
    
    state = {
        warehouseId: '',
        warehouseName: '',
        streetAddress: '',
        city: '',
        country: '',
        name: '',
        position: '',
        phoneNum: '',
        email: ''
    }

    handleCancel = () => {
        this.forceUpdate();
    }
    
    render(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }
        return(
        <main className="add-warehouse">
            <PageHeadingBar heading='Add Warehouse' buttonText='' prevUrl={this.props.match.url}/>
            <WarehouseForm warehouseId={this.state.warehouseId}
                            warehouseName={this.state.warehouseName}
                            streetAddress={this.state.streetAddress}
                            city={this.state.city}
                            country={this.state.country}
                            name={this.state.name}
                            position={this.state.position}
                            phoneNum={this.state.phoneNum}
                            email={this.state.email}
                            handleCancel={this.handleCancel}/>
        </main>
        );
    };
}

export default NewWarehousePage

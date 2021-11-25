import axios from "axios";
import { Component } from "react";
import './WarehouseForm.scss'

class WarehouseForm extends Component {
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

    componentDidMount() {
        if (this.props){
            this.setState({
                warehouseId: this.props.warehouseId,
                warehouseName: this.props.warehouseName,
                streetAddress: this.props.streetAddress,
                city: this.props.city,
                country: this.props.country,
                name: this.props.name,
                position: this.props.position,
                phoneNum: this.props.phoneNum,
                email: this.props.email
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.setState({
                warehouseId: this.props.warehouseId,
                warehouseName: this.props.warehouseName,
                streetAddress: this.props.streetAddress,
                city: this.props.city,
                country: this.props.country,
                name: this.props.name,
                position: this.props.position,
                phoneNum: this.props.phoneNum,
                email: this.props.email
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleEditSubmit = (event) => {

        event.preventDefault();

        if ( this.validateForm() ){
            let requestBody = {
                id: this.state.warehouseId,
                name: this.state.warehouseName,
                address: this.state.streetAddress,
                city: this.state.city,
                country: this.state.country,
                contact: {
                    name: this.state.name,
                    position: this.state.position,
                    phone: this.state.phoneNum,
                    email: this.state.email
                }
            }
            console.log(this.state.warehouseId)
            axios
                .put(`http://localhost:8080/api/warehouses/${this.state.warehouseId}`, requestBody)
                .then(response => {
                    console.log(response)
                })
        }
    }
    handleAddSubmit = (event) => {
        event.preventDefault();

        if ( this.validateForm() ){
            let requestBody = {
                id: this.state.warehouseId,
                name: this.state.warehouseName,
                address: this.state.streetAddress,
                city: this.state.city,
                country: this.state.country,
                contact: {
                    name: this.state.name,
                    position: this.state.position,
                    phone: this.state.phoneNum,
                    email: this.state.email
                }
            }
            console.log(this.state.warehouseId)
            axios
                .post(`http://localhost:8080/api/warehouses`, requestBody)
                .then(response => {
                    console.log(response)
                })
        }
    }

    validateInput = (input) => {
        if (!input) {
            return false;
        }
        return true;
    }

    validateForm = () => {
        if (!this.state.warehouseName) return false;
        if (!this.state.streetAddress) return false;
        if (!this.state.city) return false;
        if (!this.state.name) return false;
        if (!this.state.position) return false;
        if (!this.state.phoneNum) return false;
        if (!this.state.email) return false;
        return true;
    }

    render() {
        return(
            <>
                <form id='warehouse-form' className='warehouse-form' onSubmit={this.props.edit === true ? this.handleEditSubmit : this.handleAddSubmit}>
                    <div className='warehouse-form__section'>
                        <h2 className='warehouse-form__section-header'>Warehouse Details</h2>
                        <label for='warehouseName'>Warehouse Name</label>
                        <input className={this.validateInput(this.state.warehouseName)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'}
                                type='text' 
                                name='warehouseName' 
                                onChange={this.handleChange} 
                                value={this.state.warehouseName}
                                placeholder='Warehouse Name'></input>
                        <p className={this.validateInput(this.state.warehouseName)
                                        ? 'warehouse-form__warning--none'
                                        : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
                        
                        <label for='streetAddress'>Street Address</label>
                        <input className={this.validateInput(this.state.streetAddress)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'}
                                type='text' 
                                name='streetAddress' 
                                onChange={this.handleChange} 
                                value={this.state.streetAddress}
                                placeholder='Street Address'></input>
                        <p className={this.validateInput(this.state.streetAddress)
                                ? 'warehouse-form__warning--none'
                                : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
                        
                        <label for='city'>City</label>
                        <input className={this.validateInput(this.state.city)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'}
                                type='text' 
                                name='city' 
                                onChange={this.handleChange} 
                                value={this.state.city}
                                placeholder='City'></input>
                        <p className={this.validateInput(this.state.city)
                                ? 'warehouse-form__warning--none'
                                : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
                        
                        <label for='country'>Country</label>
                        <input className={this.validateInput(this.state.country)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'}
                                type='text' 
                                name='country' 
                                onChange={this.handleChange} 
                                value={this.state.country}
                                placeholder='Country'></input>
                        <p className={this.validateInput(this.state.country)
                                ? 'warehouse-form__warning--none'
                                : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
                    </div>

                    <div className='warehouse-form__section'>
                        <h2 className='warehouse-form__section-header'>Contact Details</h2>
                        
                        <label for='name'>Contact Name</label>
                        <input className={this.validateInput(this.state.name)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'}
                                type='text' 
                                name='name' 
                                onChange={this.handleChange} 
                                value={this.state.name}
                                placeholder='Contact Name'></input>
                        <p className={this.validateInput(this.state.name)
                                ? 'warehouse-form__warning--none'
                                : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
                        
                        <label for='position'>Position</label>
                        <input className={this.validateInput(this.state.position)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'}
                                type='text' 
                                name='position' 
                                onChange={this.handleChange} 
                                value={this.state.position}
                                placeholder='Position'></input>
                        <p className={this.validateInput(this.state.position)
                                ? 'warehouse-form__warning--none'
                                : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
                        
                        <label for='phoneNum'>Phone Number</label>
                        <input className={this.validateInput(this.state.phoneNum)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'}
                                type='text' 
                                name='phoneNum' 
                                onChange={this.handleChange} 
                                value={this.state.phoneNum}
                                placeholder='Phone'></input>
                        <p className={this.validateInput(this.state.phoneNum)
                                ? 'warehouse-form__warning--none'
                                : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
                        
                        <label for='email'>Email</label>
                        <input className={this.validateInput(this.state.email)
                                        ? 'warehouse-form__input'
                                        : 'warehouse-form__input--error'}
                                type='text' 
                                name='email' 
                                onChange={this.handleChange} 
                                value={this.state.email}
                                placeholder='Email'></input>
                        <p className={this.validateInput(this.state.email)
                                ? 'warehouse-form__warning--none'
                                : 'warehouse-form__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
                    </div>
                </form>
                <div className='warehouse-form__submit-buttons'>
                    <button className='warehouse-form__cancel' onClick={this.props.handleCancel}>Cancel</button>
                    <button type='submit' form='warehouse-form' className='warehouse-form__save'>Save</button>
                </div>
            </>
        );
    }
}

export default WarehouseForm
const WarehouseFormInput = ({classname, label, handleChange, validateInput, value}) => {
    return(
    <>
        <label for={classname}>{label}</label>
        <input className={validateInput(classname)
                        ? 'edit-warehouse__input'
                        : 'edit-warehouse__input--error'}
                type='text' 
                name={classname} 
                onChange={(event) => handleChange(event)} 
                value={value}
                placeholder={label}></input>
        <p className={validateInput(classname)
                        ? 'edit-warehouse__warning--none'
                        : 'edit-warehouse__warning--error'}><img src='http://localhost:8080/error-24px.svg' alt='error icon'></img>This field is required</p>
    </>
    );
}

export default WarehouseFormInput;
import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow_back-24px.svg";
import WarehouseInventoryList from "../WarehouseInventoryList/WarehouseInventoryList";

export default function WarehouseDetails({ warehouse, inventory }) {
  return (
    <div className="warehouse-details">
      <div className="warehouse-details__top-wrapper">
        <div className="warehouse-details__name-wrapper">
          <Link to={`/`}>
            <img
              className="warehouse-details__arrow"
              src={arrow}
              alt="back-arrow"
            />
          </Link>
          <h1 className="warehouse-details__header">{warehouse.name}</h1>
        </div>
        <Link to={`/warehouses/` + warehouse.id + `/edit`} key={warehouse.id}>
          <button className="warehouse-details__edit-button">Edit</button>
          <button className="warehouse-details__edit-button-mobile"></button>
        </Link>
      </div>
      <div className="warehouse-details__bottom-wrapper">
        <div className="warehouse-details__address-container">
          <h4 className="warehouse-details__address-header">
            WAREHOUSE ADDRESS:
          </h4>
          <p className="warehouse-details__address">{warehouse.address}</p>
          <p className="warehouse-details__address-city">
            {warehouse.city}, {warehouse.country}
          </p>
        </div>
        <div className="warehouse-details__contact-wrapper">
          <div className="warehouse-details__contact-container">
            <h4 className="warehouse-details__contact-name-header">
              CONTACT NAME:
            </h4>
            <p className="warehouse-details__contact-name">
              {warehouse.contact.name}
            </p>
            <p className="warehouse-details__contact-position">
              {warehouse.contact.position}
            </p>
          </div>
          <div className="warehouse-details__contact-information">
            <h4 className="warehouse-details__contact-information-header">
              CONTACT INFORMATION:
            </h4>
            <p className="warehouse-details__contact-phone">
              {warehouse.contact.phone}
            </p>
            <p className="warehouse-details__contact-email">
              {warehouse.contact.email}
            </p>
          </div>
        </div>
      </div>
      <WarehouseInventoryList inventory={inventory} />
    </div>
  );
}

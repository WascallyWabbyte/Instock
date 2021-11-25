import { Link } from "react-router-dom";
import "./WarehouseInventoryItemCard.scss";

const WarehouseInventoryItemCard = ({ item }) => {
  return (
    <section className="warehouse-inventory-item">
      <div className="warehouse-inventory-item__info-column">
        <h4 className="warehouse-inventory-item__heading">INVENTORY ITEM</h4>
        <div className="warehouse-inventory-item__data--item">
          <Link
            className="warehouse-inventory-item__data--item inventory-item__link"
            to={`/inventory/${item.id}`}
          >
            {item.itemName}
            <img
              className="warehouse-inventory-item__chevron-icon"
              src="http://localhost:8080/chevron_right-24px.svg"
              alt="chevron icon"
            ></img>
          </Link>
        </div>
        <h4 className="warehouse-inventory-item__heading">CATEGORY</h4>
        <p className="warehouse-inventory-item__data--category">
          {item.category}
        </p>
      </div>
      <div className="warehouse-inventory-item__info-column">
        <h4 className="warehouse-inventory-item__heading">STATUS</h4>
        <div className="warehouse-inventory-item__data--status">
          <p
            className={`warehouse-inventory-item__status${
              item.status === "In Stock" ? `--instock` : `--outstock`
            }`}
          >
            {item.status.toUpperCase()}
          </p>
        </div>
        <h4 className="warehouse-inventory-item__heading">QTY</h4>
        <p className="warehouse-inventory-item__data--qty">{item.quantity}</p>
      </div>
      <img
        className="warehouse-inventory-item__delete-icon"
        src="http://localhost:8080/delete_outline-24px.svg"
        alt="delete icon"
      ></img>
      <img
        className="warehouse-inventory-item__edit-icon"
        src="http://localhost:8080/edit-24px.svg"
        alt="edit icon"
      ></img>
    </section>
  );
};

export default WarehouseInventoryItemCard;

import { Link } from "react-router-dom";
import "./InventoryItemCard.scss";

const InventoryItemCard = ({ item }) => {
  return (
    <section className="inventory-item">
      <div className="inventory-item__info-column">
        <h4 className="inventory-item__heading">INVENTORY ITEM</h4>
        <div className="inventory-item__data--item">
          <Link
            className="inventory-item__data--item inventory-item__link"
            to={`/inventory/${item.id}`}
          >
            {item.itemName}
            <img
              className="inventory-item__chevron-icon"
              src="http://localhost:8080/chevron_right-24px.svg"
              alt="chevron icon"
            ></img>
          </Link>
        </div>
        <h4 className="inventory-item__heading">CATEGORY</h4>
        <p className="inventory-item__data--category">{item.category}</p>
      </div>
      <div className="inventory-item__info-column">
        <h4 className="inventory-item__heading">STATUS</h4>
        <div className="inventory-item__data--status">
          <p
            className={`inventory-item__status${
              item.status === "In Stock" ? `--instock` : `--outstock`
            }`}
          >
            {item.status.toUpperCase()}
          </p>
        </div>
        <h4 className="inventory-item__heading">QTY</h4>
        <p className="inventory-item__data--qty">{item.quantity}</p>
        <h4 className="inventory-item__heading">WAREHOUSE</h4>
        <p className="inventory-item__data--warehouse">{item.warehouseName}</p>
      </div>
      <img
        className="inventory-item__delete-icon"
        src="http://localhost:8080/delete_outline-24px.svg"
        alt="delete icon"
      ></img>
      <img
        className="inventory-item__edit-icon"
        src="http://localhost:8080/edit-24px.svg"
        alt="edit icon"
      ></img>
    </section>
  );
};

export default InventoryItemCard;

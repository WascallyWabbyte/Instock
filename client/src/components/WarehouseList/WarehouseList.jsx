import WarehouseCard from "../WarehouseCard/WarehouseCard";
import { Link } from "react-router-dom";
import "./WarehouseList.scss";

function WarehouseList({ whListArr }) {
  return (
    <>
      <section className="whlist__wrap">
        <article className="whlist__hdr-sec">
          <h1 className="whlist__hdr-title">Warehouses</h1>
          <div className="whlist__func-ctnr">
            <form>
              <input
                className="whlist__search"
                type="text"
                placeholder="Search..."
              />
            </form>
            <Link to="/warehouses/add">
              <button className="whlist__add-btn">+ Add New Warehouse</button>
            </Link>
          </div>
        </article>
        {/* This is for the header row */}
        <article className="whHeader">
          <div className="whHeader__bg">
            <div className="whHeader__info-wrap">
              <div className="whHeader__sec">
                <div className="whHeader__sec-sub">
                  <h3 className="whHeader__bdy">WAREHOUSE</h3>
                </div>
                <div className="whHeader__sec-sub">
                  <h3 className="whHeader__bdy">ADDRESS</h3>
                </div>
              </div>
              <div className="whHeader__sec">
                <div className="whHeader__sec-sub">
                  <h3 className="whHeader__bdy">CONTACT NAME</h3>
                </div>
                <div className="whHeader__sec-sub">
                  <h3 className="whHeader__bdy">CONTACT INFORMATION</h3>
                </div>
              </div>
            </div>

            <h3 className="whHeader__icon-hdr">ACTION</h3>
          </div>
        </article>
        {/* This is the list section */}
        {whListArr.map((warehouse) => (
          <WarehouseCard
            key={warehouse.id}
            id={warehouse.id}
            whname={warehouse.name}
            address={warehouse.address}
            city={warehouse.city}
            country={warehouse.country}
            contactname={warehouse.contact.name}
            contactphone={warehouse.contact.phone}
            contactemail={warehouse.contact.email}
          />
        ))}
      </section>
    </>
  );
}

export default WarehouseList;

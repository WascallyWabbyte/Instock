import "./WarehouseCard.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/images/edit-24px.svg";
import remove from "../../assets/images/delete_outline-24px.svg";
import chevron from "../../assets/images/chevron_right-24px.svg";

function WarehouseCard({
  id,
  whname,
  address,
  contactname,
  contactphone,
  contactemail,
  city,
  country,
}) {
  return (
    <>
      <section className="whCard__entry">
        <div className="whCard__info-wrap">
          {/* Warehouse & Address information */}
          <div className="whCard__row-sec">
            <article className="whCard__ctnr">
              <h3 className="whCard__card-hdr">WAREHOUSE</h3>
              <p className="whCard__card-bdy">
                <Link
                  to={`/warehouses/${id}`}
                  className="whCard__card-bdy-ctnr"
                >
                  <div className="whCard__card-bdy-name">
                    <div className="whCard__card-name">{whname}</div>
                    <img src={chevron} alt="warehouse details icon"></img>
                  </div>
                </Link>
              </p>
            </article>
            <article className="whCard__ctnr">
              <h3 className="whCard__card-hdr">ADDRESS</h3>
              <p className="whCard__card-bdy">
                {address}, {city}, {country}
              </p>
            </article>
          </div>
          {/* Contact Name, phone, email */}
          <div className="whCard__row-sec">
            <article className="whCard__ctnr">
              <h3 className="whCard__card-hdr">CONTACT NAME</h3>
              <p className="whCard__card-bdy">{contactname}</p>
            </article>
            <article className="whCard__ctnr">
              <h3 className="whCard__card-hdr">CONTACT INFORMATION</h3>
              <div>
                <p className="whCard__card-bdy">
                  {contactphone}
                  <p>{contactemail}</p>
                </p>
              </div>
            </article>
          </div>
        </div>
        {/* delete and edit buttons */}
        <div className="whCard__card-icon-ctnr">
          <div>
            <img src={remove} alt="remove warehouse icon" />
          </div>
          <div>
            <img src={edit} alt="edit warehouse icon" />
            {/* Render warehousedelmodal here with the prop of the warehouseID so we can delete */}
            {/* Pass in the id tp the child so that we can use the delete button */}
          </div>
        </div>
      </section>
    </>
  );
}

export default WarehouseCard;

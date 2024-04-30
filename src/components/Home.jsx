import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import contacts from "./contacts";
import Footer from "./Footer";
import ImageRow from "./ImageRow";
import FullVideo from "./Video";
import React, { useState } from "react";

import PaymentForm from "./PaymentForm";
export default function Home() {
  const [data, setData] = useState(contacts);
  const filterItem = (cat) => {
    const result = contacts.filter((current) => {
      return current.category === cat;
    });
    setData(result);
  };
  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  return (
    <>
      <div className="App">
        <Navbar name={`Shopping Time`} cartItems={cartItems} />

        <div>
          <FullVideo />
        </div>

        <div className="filter">
          <button
            className="btn btn-info my-2 mx-3"
            onClick={() => filterItem(`mobile`)}
          >
            Mobiles
          </button>
          <button
            className="btn btn-info  my-2 mx-3"
            onClick={() => filterItem(`men`)}
          >
            {" "}
            Men
          </button>
          <button
            className="btn btn-info my-2  mx-3"
            onClick={() => filterItem(`women`)}
          >
            {" "}
            Women
          </button>
          <button
            className="btn btn-info my-2 mx-3"
            onClick={() => filterItem(`sneakers`)}
          >
            {" "}
            Sneakers
          </button>
          <button
            className="btn btn-info my-2 mx-3 value"
            onClick={() => filterItem(`smart watch`)}
          >
            {" "}
            Smart Watch
          </button>{" "}
        </div>

        {data.map((values) => {
          const { id, title, price, rating, thumbnail, src, ddToCart } = values;
          return (
            <>
              <div className="card-List">
                <div className="card ">
                  <Link
                    to={`/cart/${id}`}
                    className="btn btn-light  justify-content-between"
                  >
                    <div className="card-deck" key={id}>
                      <img
                        className="card-img-top my-2"
                        src={thumbnail}
                        alt="APPLE iphone14(Blue,128GB)"
                      />
                      <div className="card-body">
                        <h5 className="card-title ">{name}</h5>
                        <button className=" rate my-1">
                          {" "}
                          {rating} &#11088;
                        </button>
                        <p className=" price my-1">{price} &#8377; </p>
                        <div
                          className="cart-icon"
                          onClick={() => addToCart(id)}
                        >
                          <img
                            src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg"
                            alt="Cart Icon"
                          />
                        </div>

                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
        {/* <Footer /> */}
      </div>
    </>
  );
}

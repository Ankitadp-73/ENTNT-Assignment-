import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { items } from "./components/Data";
function AddProduct() {
  //   const [product, setCart] = useState([...items]);
  const [productname, setproductname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const addProductss = (id, price) => {
    const obj = {
      id: 9879,
      category: category,
      title: productname,
      imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
      amazonLink: "https://amzn.to/3r9rvhm",
      description:
        "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, ",
      price: price,
      availableCount: 0,
      userName: "Ankita Dhanaji Panchavare",
      mobileNumber: "123-456-789",
      orderedDate: "12/3/2024",
      OrderedBy: "Ankita D P",
      shipmentDate: "12/3/2024",
      Company: "ENTNT",
      DeliveredDate: "12/3/2024",
      DeliveredTo: "Ankita D P",
      orderStatus: "Delivered",
      payMentMode: "COD",
      paymentStatus: "Paid",
    };
    product = items.push(obj);
  };
  return (
    <>
    <div className="bg-yellow">
    <div class="main">
        <h3>Add The Product</h3>
        <form className="ProductName">
          <p>
            <label>
              Product Name :
              <input
                type="text"
                name="text"
                value={productname}
                onChange={(e) => setproductname(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Category :
              <input
                style={{ left: "20px", position: "relative" }}
                type="text"
                name="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Price
              <input
                style={{ left: "39px", position: "relative" }}
                type="text"
                name="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </p>

          <p>
            <Link to={`/dashboard`}>
              <button
                type="submit"
                className="btn-products-new-w100px"
                onClick={() => addProductss(productname, price, category)}
              >
                Submit
              </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
     
    </>
  );
}
export default AddProduct;

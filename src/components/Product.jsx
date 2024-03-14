import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
  const [show, setShow] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShowEditPopup(false);
  const handleShowEdit = () => setShowEditPopup(true);
  let [productname, setPrice] = useState("");
  let [productname1, setproductname] = useState("");
  let [price1, setPrice1] = useState("");
  let [category1, setCategory] = useState("");
  let [description, setDescription] = useState("");
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const deleteProduct = (products) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == products.id) {
        items.splice(i, 1);
        i--;
        setCart([...items]);
        setPrice((productname = products.title));
        // alert( products.title + "   Deleted SuccessFully!")
      }
    }
  };
  const EditProduct = (product) => {
    setproductname((productname1 = product.title));
    setPrice1((price1 = product.price));
    setCategory((category1 = product.category));
    setDescription((description = product.description));
    console.log(product);
  };
 const addProductss =(productname1, price1, category1, description)=>{
  for (let i = 0; i < items.length; i++) {
    if (items[i].title == productname1) {
       alert("Successfully Edited!")
      items[i].price=price1;
      items[i].title=productname1;
      items[i].category=category1;
      items[i].description=description;
      // setPrice1((price1 = price1));

      // alert( products.title + "   Deleted SuccessFully!")
    }
  }
 }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 my-3 text-center dis-flex-centre"
                >
                  <div className="card" style={{ width: "18rem" }}>
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={product.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <span>
                        Category :
                        <span className="ProductName">{product.category}</span>
                      </span>
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="">
                        Available Stocks :{product.availableCount}
                      </p>
                      <div className="dis-flex-centre">
                        <div>
                          <button className="btn btn-primary mx-3 w-100px">
                            {product.price} ₹
                          </button>
                        </div>
                        <div onClick={handleShowEdit}>
                          <button
                            className="btn btn-primary mx-3"
                            onClick={() => EditProduct(product)}
                          >
                            Edit
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => deleteProduct(product)}
                            className="btn btn-danger"
                          >
                            <span onClick={handleShow}> Delete </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <span className="col-green">Deleted Successfully !!</span>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Product Name <strong>{productname} </strong>Deleted SuccessFully{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditPopup} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <span className="col-blue">Edit Product</span>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="">
            <form className="ProductName">
              <p>
                <label>
                  Product Name :
                  <input
                    type="text"
                    name="text"
                    value={productname1}
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
                    value={category1}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </label>
              </p>
              <p>
                <label>
                  Description
                  <input
                    style={{ left: "14px", position: "relative" }}
                    type="text"
                    name="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    value={price1}
                    onChange={(e) => setPrice1(e.target.value)}
                  />
                </label>
              </p>

              <p onClick={handleCloseEdit}>
                <Link>
                  <button
                    type="submit"
                    className="btn-products-new-w100px"
                    onClick={() =>
                      addProductss(productname1, price1, category1, description)
                    }
                  >
                    Update
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Product;

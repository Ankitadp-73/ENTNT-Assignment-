import React, { useState } from 'react'
import "./index.css";
import { Link } from "react-router-dom";
import { items } from './components/Data'
function OrderDetails () {
  const [product, setCart] = useState([...items]);
  const [text, setText] = useState('default')
  let watchProduct="";
 const addproduct=(text)=>{
    console.log(text)
 }
  return (
    <>

 <div className="tab2 bg-gray w-100">
 <div  className='dis-flex-justify mar-lt-5per pad-10px pad-top-4per mar-btm-1per mar-rt-7per' >
    <div className='dis-flex'>
    <div className='productsname txt-centre col-violet-active hand'>
      <Link to={`/dashboard`}>
      <div className='Available-Products'>
           49 <br />
           <span className='prodyct'>Products Added</span> 
       </div>
      </Link>
      </div>
    <div className='productsname txt-centre col-violet-inactive hand pad-top-1per mar-lt-8per'>
       <Link to={`/orderDetails`}>
       <div className='Available-Products'>
          350 <br />
           <span className='prodyct'>Orders Recieved</span> 
       </div>
       </Link>
   </div>
    </div>
 
    <div className='hyphenls'>
    <Link to={`/addProduct`}>
      <button  className="btn-products-new">
        Add Product
        </button>
       </Link>
    </div>
 </div>

 <table id='Products' >
    <thead className='h-40px'>
      <tr>
        <th>Ordered Id </th>
        <th>Product Name</th>
        <th>Ordered Date </th>
        <th>Ordered By </th>
       <th>Order Status </th>
       <th>Payment Mode </th>
       <th>Payment Status</th>
      </tr>
    </thead>
    <tbody className='txt-centre bg-white'>
      {items.map((products)=>{
        return(
          <>
          <tr>
            <td>{products.id}</td>
            <td>{products.title}</td>
            <td>{products.orderedDate}</td>
            <td>{products.OrderedBy}</td>
            <td>

              <span > 
                {}
              <button className='button-33' role="button" style={{backgroundColor:products.backGround}}> {products.orderStatus}</button>
               </span>
             </td>
            <td>{products.payMentMode}</td>
            <td>{products.paymentStatus}</td>
          </tr>
          </>
        )
      })}

    </tbody>
</table>
  
 </div>  







  </>
  );
}
export default OrderDetails;

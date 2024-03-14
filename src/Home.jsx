import React, { useState } from 'react'
import "./index.css";
import { Link } from "react-router-dom";
import { items } from './components/Data'
function Home () {
  let [product, setCart] = useState([...items]);
   const deleteProduct=(products)=>{
    for(let i=0;i<items.length;i++ ){
      if(items[i].id==products.id){
        items.splice(i,1);
        i--;
        setCart([...items]);
        alert( products.title + "   Deleted SuccessFully!")
      }
    }
    
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
      <button  className="btn-products-new" onClick={() =>addToCart(22,"uywuw") }>
        Add Product
        </button>
       </Link>
    </div>
 </div>
 <div className='max-width-100per'>
 <table id='OrderStatus' className='bg-vilet-active'>
    <thead className='h-40px'>
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Category </th>
        <th>Price </th>
       <th>Action </th>
      </tr>
    </thead>
    <tbody className='txt-centre bg-white'>
      {product.map((products)=>{
        return(
          <>
          <tr>
            <td>{products.id}</td>
            <td>{products.title}</td>
            <td>{products.category}</td>
            <td>{products.price}</td>
            <td>
              <div className='dis-flex-evenly'>
                <div>
                  <button className='btn btn-primary'>Edit </button>
                </div>
                  <div>
                  <button className='btn btn-danger' onClick={()=>deleteProduct(products)}>Delete</button>
                </div>
              </div>
            </td>
          </tr>
          </>
        )
      })}

    </tbody>
</table>
</div>
</div>  

  </>
  );
}
export default Home;

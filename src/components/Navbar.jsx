import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs';



const Navbar = ({ setData, cart }) => {
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price)
    setData(element)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }


  return (
    <>
      <div className='sticky-top'>
        <div className="nav-bar">
          <Link to={'/'} className="brand">ERP System</Link>
             <div className="nav-bar-new">
            <Link to={'/dashboard'}><button class="dashboard-btns-9" >
              Dashboard
            </button></Link>
          </div>
          <div className="nav-bar ">
            <Link to={'/productManagement'}><button class="dashboard-btns-9" >
              Products <span className='noshownewgro'>Management</span> 
            </button></Link>
          </div>
          <div className="nav-bar ">
            <Link to={'/ordersManagement'}><button class="dashboard-btns-9" >
              Orders <span class='noshow'> Management</span>
            </button></Link>
          </div>
          {/* <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill style={{ fontSize: '1.5rem' }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link> */}
        </div>




      </div>
    </>
  )
}

export default Navbar
import React, { useState } from 'react'
import { FaBars, FaTh } from 'react-icons/fa'
import { CiCreditCard1, CiCalculator1 } from 'react-icons/ci'
import { MdOutlinePayment} from 'react-icons/md'
import { GrTransaction } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'


const Sidebar = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen);

    const menuItems = [
        {
            path: '/',
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: '/dollarcard',
            name: "Dollar Card",
            icon: <CiCreditCard1 />
        },
        {
            path: '/payment',
            name: "Payment",
            icon: <MdOutlinePayment />
        },
        {
            path: '/transaction',
            name: "Transactions",
            icon: <GrTransaction />
        },
        {
            path: '/calculator',
            name: "Calculator",
            icon: <CiCalculator1 />
        },
    ]

  return (
    <div className='container'>
        <div style={{width: isOpen ? "300px" : "50px"}} className='sidebar'>
            <div className='top_section'>
                <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>BridgePay</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
                    <FaBars  onClick={toggle}/>
                </div>
            </div>
            {
                menuItems.map((item,index)=>(
                    <NavLink to={item.path} key={index} className='link' activeClassName='active'>
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar
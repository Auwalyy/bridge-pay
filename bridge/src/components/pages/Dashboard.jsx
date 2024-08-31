import React from 'react'
import './Dashboard.css'

const Dashboard = () => {

    const text = [
        {
            name: 'Naira Balance',
            desc: 'N0.00'
        },
        {
            name: 'USD Equivalent',
            desc: '$0.00'
        },
        {
            name2: 'Payment Request',
            desc1: 'Want BridgePay to pay for you? Make a payment request' 
        }
    ]

    return (
        <div>
            <div className="d_container">
                <h1 className="title">BridgePay</h1>
                <div className="s_container">
                    {
                        text.map((item,index)=>(
                            <div key={index} className='main'>
                                <h3 className='m_title'>{item.name}</h3>
                                <p className='desc'>{item.desc}</p>
                                <div className="extend">
                                <h3 className='e_title'>{item.name2}</h3>
                                <p className='e_desc'>{item.desc1}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <h3>Recent Transactions</h3>
                    <p>Your most recent transaction are displayed below</p>
                    <table>
                        <tbody>
                        <tr>
                            <td className='td_title'>Channel</td>
                            <td className='td_title'>Amount</td>
                            <td className='td_title'>Transaction Type</td>
                            <td className='td_title'>Status</td>
                            <td className='td_title'>Date and time</td>
                        </tr>
                        <tr>
                            <td>AliExpress</td>
                            <td>$40.00</td>
                            <td>payment request</td>
                            <td className='status-completed'>completed</td>
                            <td>Jan 02  2024</td>
                        </tr>
                        <tr>
                            <td>X premuim</td>
                            <td>$8.20</td>
                            <td>dollar card</td>
                            <td className='status-processing'>processing</td>
                            <td>Feb 15  2024</td>
                        </tr>
                        <tr>
                            <td>Namecheap</td>
                            <td>$9.99</td>
                            <td>dollar card</td>
                            <td className='status-successful'>successfull</td>
                            <td>Mar 29  2024</td>
                        </tr>
                        <tr>
                        <td>Boomplay</td>
                            <td>$12.99</td>
                            <td>payment request</td>
                            <td className='status-cancelled'>cancelled</td>
                            <td>Jul 12  2024</td>
                        </tr>
                        </tbody>
                    </table>
                 </div>
            </div>
        
    )
}

export default Dashboard;
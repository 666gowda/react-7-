import React from 'react'
import AvailableProducts from '../total-available-product/AvailableProduct';
import arrowup from '../assets/arrowup.jpg';

export default function HomeTabContent() {
    return (
        <div>
            <h2>Home Tab</h2>
            <br />
            <div className='row ms-3' style={{}}>

                <div className='col-4 me-5 rounded shadow border' style={{ width: '30%', height: '250px', backgroundColor: '#F8F9FA', backgroundImage: `url(${arrowup})`, backgroundSize: 'contain' }}>
                    <AvailableProducts />
                </div>

                <div className='col-8  rounded shadow border' style={{ width: '60%', height: '250px', backgroundColor: 'green' }}>

                </div>



            </div>
        </div>
    )
}

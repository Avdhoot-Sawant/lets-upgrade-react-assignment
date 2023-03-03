import React from 'react'
import './Product.css'

const Product = ({ data }) => {

    return (
        <>
            <div className='pro'>
                <h4>Title :- {data.Title}</h4>
                <h4> Price:- {data.Price}</h4>
                <h4>Description :- {data.Description}</h4>
            </div>
        </>
    )
}


export default Product;
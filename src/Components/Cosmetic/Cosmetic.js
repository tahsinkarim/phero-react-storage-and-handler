import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name , brand, price, id } = props.cosmetic;
    const addToCart = (id) =>{
        console.log(id , 'added') 
        addToDb(id)
    }

    const removeFromCart = id => {
        removeFromDb(id)
    }
    // const addCartParam = () => addToCart(name)
    return (
        <div className='cosmetic'>
            <h2>{name}</h2>
            <p> <small>Brand: {brand}</small> </p>
            <p>Price: ${price}</p>
            {/* <button onClick={addCartParam}>Buy</button> */}
            <button className='btn' onClick={() => addToCart(id)}>Buy</button>
            <button className='btn' onClick={() => removeFromCart(id)}>Remove</button>

        </div>
    );
};

export default Cosmetic;
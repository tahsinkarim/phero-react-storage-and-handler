import React, { useEffect, useState } from 'react';
import { multiply } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    const first = 5;
    const second = 10;
    const total = multiply (first, second)

    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCosmetics(data))
    } ,[])
    return (
        <div>
            <h1>
                Welcome to Cosmetics store!!
            </h1>
            <p>{total}</p>
            {
                cosmetics.map( cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic} ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;
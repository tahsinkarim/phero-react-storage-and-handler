import React from 'react';
import { multiply } from '../../utilities/calculate';


const Cosmetics = () => {
    const first = 5;
    const second = 10;
    const total = multiply (first, second)

    return (
        <div>
            <h1>
                Welcome to Cosmetics store!!
            </h1>
            <p>{total}</p>
        </div>
    );
};

export default Cosmetics;
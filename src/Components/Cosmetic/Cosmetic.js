import React from 'react';

const Cosmetic = (props) => {
    const {name , age, gender, email } = props.cosmetic;
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p><strong>Email: {email}</strong></p>
        </div>
    );
};

export default Cosmetic;
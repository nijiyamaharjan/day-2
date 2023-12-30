import React, { useState } from 'react';

const data = [
    { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
    { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }
];

const Table = (props) => {
    const [display, setDisplay] = useState(false);

    const show = () => {
        setDisplay(true);
    };

    const hide = () => {
        setDisplay(false);
    };
    

    const myTable = (
        <div>
            {data.map((table, index) => (
                
                <div key={index}>
                    {table.category}   {table.price}   {table.stocked}   {table.name}
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <h2>{props.title}</h2>

            {/* Use count if needed */}
            {/* <p>Table: {count}</p> */}
            <button onClick={show}>Show Data</button>  
            <button onClick={hide}>Hide Data</button>
            <br/><br/>
            {display ? myTable : <p> Data Hidden</p>}
        </div>
    );
};

export default Table;

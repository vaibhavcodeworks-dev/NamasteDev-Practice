import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './styles.css'

function Accordion({ items }) {
    const [isActive, SetIsActive] = useState(-1);
    const handleClick = (index) => {
        if (index === isActive)
            SetIsActive(-1)
        else SetIsActive(index)
    }
    return (
        <div className='accordion'>
            {items.length === 0 ? <p>No items available.</p> : (
                items.map((item, index) => (
                    <div className='accordion-item' key={index}>
                        <button className='accordion-title'
                            onClick={() => handleClick(index)}>{item.title}</button>
                        {isActive == index ? <FaChevronUp /> : <FaChevronDown />}
                        {isActive == index && (
                            <div className='accordion-content'>
                                <p>{item.content}</p>
                            </div>
                        )}
                    </div>

                ))
            )}

        </div>

    );
}

export default Accordion;
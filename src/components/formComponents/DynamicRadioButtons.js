// components/DynamicRadioButtons.js

import React, { useState } from 'react';

const DynamicRadioButtons = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className='my-8'>
     
      {options.map((option) => (
        <div className='flex gap-4 mt-2 h4' key={option.value}>
          <input
            type="radio"
            id={option.value}
            name="dynamicRadio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default DynamicRadioButtons;
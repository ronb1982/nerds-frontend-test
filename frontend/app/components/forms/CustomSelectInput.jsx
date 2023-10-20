'use client';

import { Label, Select } from 'flowbite-react';
import { useEffect, useState } from 'react';

const CustomSelectInput = (props) => {
  const [defaultLabel, setDefaultLabel] = useState('Select a value');
  const [defaultValue, setDefaultValue] = useState(null);

  useEffect(() => {
    const defaultOption = props.options?.find(option => option.defaultValue);
    
    if (defaultOption) {
      setDefaultValue(defaultOption.value);
      setDefaultLabel(defaultOption.label);
    }
  }, [props.options]);

  return (
    <div className='mr-2'>
      <div className="mb-2">
        <Label
          htmlFor={props.elementId}
          value={props.label}
          className='text-white'
        />
      </div>
      <Select
        id={props.elementId}
        required={props.required}
        defaultValue={defaultValue}
      >
        <option value={defaultValue}>{defaultLabel}</option>
        {props.options.map((option, index) => (
          !option.defaultValue && (
            <option key={index} value={option.value}>{option.label}</option>
          )
        ))}
      </Select>
    </div>
  )
}

export default CustomSelectInput;
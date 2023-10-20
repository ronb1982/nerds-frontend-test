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
  }, []);

  return (
    <>
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
        <option>
          United States
        </option>
        <option>
          Canada
        </option>
        <option>
          France
        </option>
        <option>
          Germany
        </option>
      </Select>
    </>
  )
}

export default CustomSelectInput;
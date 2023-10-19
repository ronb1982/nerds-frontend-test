'use client';

import { Label, TextInput } from "flowbite-react";

const CustomTextInput = (props) => {
  return (
    <div>
        <div className="mb-2 block">
          <Label
            htmlFor="large"
            value="Large input"
          />
        </div>
        <TextInput
          id="large"
          sizing="lg"
          type="text"
          placeholder={props.placeholder}
          rightIcon={props.rightIcon}
        />
    </div>
  )
}

export default CustomTextInput
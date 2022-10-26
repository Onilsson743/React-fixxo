import React, { useState } from 'react'

const FormInput = (data) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = data;

    const handleFocus = (e) => {
        setFocused(true);
    }

  return (
    <div className='forminput'>
        <label>{data.label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
        <span>{errorMessage}</span>
        {/* <input placeholder={data.placeholder} name={data.name} /> */}
        {/* <input placeholder={data.placeholder} onChange={e => data.setUsername(e.target.value)} /> */}

    </div>
  )
}

export default FormInput
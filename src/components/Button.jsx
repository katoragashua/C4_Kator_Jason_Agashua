import React from 'react'

const Button = (props) => {
    const {label} = props
  return (
    <div>
      <button>{label}</button>
    </div>
  );
}

export default Button
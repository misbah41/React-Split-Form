
import React from 'react'
import PropTypes from 'prop-types'; // ES6


const TextInput = props => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      value={props.value}
      onChange={props.onChange}
      className="form-control my-2"
      type={props.type}
      name={props.name}
      id={props.name}
      placeholder={props.placeholder}
    />
  </div>
)

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

TextInput.default = {
  type: 'text',
  label: '',
  placeholder: ''
}

export default TextInput;
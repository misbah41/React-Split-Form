

import React from 'react'
import PropTypes from 'prop-types'; // ES6
import TextInput from './TextInput.jsx';



//start form to
const Form = props => (
  <form onSubmit={props.handleSubmit}>

    <TextInput
      name="name"
      type="text"
      placeholder="Example Your Name"
      value={props.values.name}
      onChange={props.handleChange}
      label="Enter Your Name In Input"
    />

    <TextInput
      name="email"
      type="email"
      placeholder="Example42@gmail.com"
      value={props.values.email}
      onChange={props.handleChange}
      label="Enter Your Emai In Input"
    />

    <TextInput
      name="password"
      type="password"
      placeholder="********"
      value={props.values.password}
      onChange={props.handleChange}
      label="Enter Your Password In Input"
    />
    <button type="submit">Sbmit</button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
//form end to

export default Form;

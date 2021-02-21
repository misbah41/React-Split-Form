
import React from 'react';
import TextInput from './TextInput';
import PropTypes from 'prop-types'; // ES6

const Form = ({ values, Agreement, handleAgreement, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="name"
        label=" Name"
        value={values.name}
        onChange={handleChange}
        type="text"
        placeholder="Enter Your Name"
      />
      <TextInput
        name="email"
        label=" Email"
        value={values.email}
        onChange={handleChange}
        type="email"
        placeholder="Enter Your Email"
      />
      <TextInput
        name="password"
        label=" Password"
        value={values.password}
        onChange={handleChange}
        type="password"
        placeholder="Enter Your Password"
      />
      <TextInput
        name="birthDay"
        label="Birth Day"
        type="date"
        value={values.birthDay}
        onChange={handleChange}
        placeholder="Enter Your Date"

      />

      <div className="form-group">
        <label className="mr-4">
          <input className="form-group mr-2" type="radio" name="gender" value='Male' onChange={handleChange} />
          Male
        </label>
        <label className="mr-4">
          <input className="form-group mr-2" type="radio" name="gender" value='Female' onChange={handleChange} />
          Female
        </label>
        <label className="mr-4">
          <input className="form-group mr-2" type="radio" name="gender" value='other' onChange={handleChange} />
          Other
        </label>
      </div>
      <div className="form-group">
        <label className="mr-4">
          <input className="form-group mr-2" type="checkbox" name="Agreement" checked={Agreement} onChange={handleAgreement} />
          <small>I Agree All The Terms And Conditon</small>
        </label>
      </div>
      <button disabled={!Agreement} className="btn btn-primary" type="submit">Create Account</button>
    </form>
  )
}

Form.propTypes = {
  values: PropTypes.object.isRequired,
  Agreement: PropTypes.bool.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default Form;


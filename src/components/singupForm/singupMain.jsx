
import React from 'react'
import Form from './form.jsx'
const initValues = {
  name: '',
  email: '',
  password: '',
  birthDay: '',
  gender: '',
}

class SingupForm extends React.Component {

  state = {
    values: initValues,
    Agreement: false
  }

  //handleChange method
  handleChange = event => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    })
  }

  //Agreement method
  handleAgreement = event => {
    this.setState({
      Agreement: event.target.checked
    })
  }

  //submit method
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.values)
    event.target.reset()
    this.setState({
      values: initValues, Agreement: false
    })
  }

  //render method
  render() {
    return (
      <>
        <h3>React Split Form Component</h3>
        <small>Result In Console</small>
        <Form
          values={this.state.values}
          handleChange={this.handleChange}
          Agreement={this.state.Agreement}
          handleAgreement={this.handleAgreement}
          handleSubmit={this.handleSubmit}
        />
      </>
    )
  }
}

export default SingupForm;


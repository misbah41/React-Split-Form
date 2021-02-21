


import React from 'react';

class ControledForm extends React.Component {

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    event.target.reset()
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }

  render() {
    const {name, email, password} = this.state
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>

          <input value={name} onChange={this.handleChange} className="form-control my-2" type="text" name="name" placeholder="Enter Your Name" />

          <input value={email} onChange={this.handleChange} className="form-control my-2" type="email" name="email" placeholder="Enter Your email" />

          <input value={password} onChange={this.handleChange} className="form-control my-2" type="password" name="password" placeholder="Enter Your password" />

          <button type="submit">Sbmit</button>
        </form>
      </div>
    )
  }
}



export default ControledForm;





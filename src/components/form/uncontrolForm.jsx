
import React from 'react';

class UncontrolForm extends React.Component {

  handleSubmit = event  =>{
    event.preventDefault()
    const data = {}
    data.name = event.target.name.value
    data.emai = event.target.email.value
    data.password = event.target.password.value
    console.log(data)
    document.getElementById('display').innerHTML = data.name
    document.getElementById('display').innerHTML = data.email
    document.getElementById('display').innerHTML = data.password
    event.target.reset()
  }

  render(){
    return(
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input className="form-control my-2" type="text" name="name" placeholder="Enter Your Name"/>
          <input className="form-control my-2" type="text" name="email" placeholder="Enter Your email"/>
          <input className="form-control my-2" type="text" name="password" placeholder="Enter Your password"/>
          <button type="submit">Sbmit</button>
        </form>
        <div id="display">

        </div>
      </div>
    )
  }
}



export default UncontrolForm;

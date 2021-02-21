
import React from 'react'

class FormApp extends React.Component {

  state = {
    name: '',
    country: '',
    bio: '',
    birthDay: '',
    gender: '',
    agree: false,
    skills: []

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      agree: e.target.checked
    })
  }

  showData = (e) => {
    this.setState({
      [e.target.value]: console.log(this.state)
    })
  }

  handleSkillsChange = (e) => {
    if (e.target.checked) {
      this.setState({
        skills: [...this.state.skills, e.target.value]
      })
    } else {
      const skills = this.state.skills.filter(skill => skill !== e.target.value)
      this.setState({
        skills
      })
    }
  }

  render() {
    const { name, country, bio, birthDay, agree, skills } = this.state
    return (
      <div className="form-app">
        <input value={name} onChange={this.handleChange} className="form-control my-2" type="text" name="name" placeholder="Enter Your Name" />
        <select value={country} onChange={this.handleChange} className="form-control my-2" name="country"  >
          <option >Enter Your Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="China">China</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Srilanka">Srilanka</option>
          <option value="India">India</option>
        </select>
        <textarea value={bio} onChange={this.handleChange} className="form-control my-2" name="bio" placeholder="Enter Your Bio"></textarea>
        <input value={birthDay} onChange={this.handleChange} className="form-control my-2" name="birthDay" type="date" />
        <input name="gender" type="radio" value='male' onChange={this.handleChange} />
        Male
        <input name="gender" type="radio" value='female' onChange={this.handleChange} />
        Female
        <input name="gender" type="radio" value='other' onChange={this.handleChange} />
        Other <br />
        <div>
          <input name="agree" checked={agree} type="checkbox" onChange={this.handleCheckbox} />
          <small>I Agree All The Terms And Conditon</small>
        </div>
        <div>
          <h4>Skills</h4>
          <input type="checkbox" name="skills" value="JavaScript" checked={skills.includes('JavaScript')} onChange={this.handleSkillsChange} />
          JavaScript
          <input type="checkbox" name="skills" value="Java" checked={skills.includes('Java')} onChange={this.handleSkillsChange} />
          Java
          <input type="checkbox" name="skills" value="Python" checked={skills.includes('Python')} onChange={this.handleSkillsChange} />
          Python
          <input type="checkbox" name="skills" value="Golang" checked={skills.includes('Golang')} onChange={this.handleSkillsChange} />
          Golang
          <input type="checkbox" name="skills" value="Ruby" checked={skills.includes('Ruby')} onChange={this.handleSkillsChange} />
          Ruby
          <input type="checkbox" name="skills" value="Rust" checked={skills.includes('Rust')} onChange={this.handleSkillsChange} />
          Rust
        </div>
        <button className="btn btn-primary" onClick={this.showData}>SEND DATE</button>

      </div>
    )
  }

}










export default FormApp;
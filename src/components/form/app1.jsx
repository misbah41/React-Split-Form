
import React from 'react';


class MyApp extends React.Component {

  state = {
    count: 0
  }

  intervalId = null;

  increament = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decreament = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    } else {
      alert('Negative Value Is Not Allowed')
    }
  }

  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({
          count: this.state.count - 1
        }, () => {
          if (this.state.count === 0) {
            alert('timer finished')
            clearInterval(this.intervalId)
            this.intervalId = null
          }
        })
      }, 1000)
    }
  }

  stopTimer = ()=>{
    if(this.intervalId){
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  restTimer = ()=>{
    this.setState({count: 0})
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="d-flex justify-content-around">
              <div className="plus">
                <button onClick={this.increament} type="button" className="btn btn-outline-dark">Plus</button>
              </div>
              <div className="timerDiv">
                <h3>{this.state.count}</h3>
              </div><div className="Minus">
                <button onClick={this.decreament} type="button" className="btn btn-outline-dark">Minus</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col-sm-6">
            <div className="d-flex justify-content-around">
              <button onClick={this.startTimer} type="button" className="btn btn-outline-dark">Start</button>
              <button onClick={this.stopTimer} type="button" className="btn btn-outline-dark">Stop</button>
              <button onClick={this.restTimer} type="button" className="btn btn-outline-dark">Reset</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default MyApp;

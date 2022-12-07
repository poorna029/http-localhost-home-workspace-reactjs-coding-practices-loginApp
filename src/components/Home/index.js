// Write your code here
// Write your code here

import './index.css'

import {Component} from 'react'

class Home extends Component {
  state = {isLogged: false}

  isTrue = () => {
    this.setState(pre => {
      let x
      if (pre.isLogged === true) {
        x = false
      } else {
        x = true
      }
      return {isLogged: x}
    })
  }

  buttonText = () => {
    const {isLogged} = this.state

    if (isLogged === false) {
      return 'Login'
    }
    return 'Logout'
  }

  heading = () => {
    const {isLogged} = this.state

    if (isLogged === false) {
      return 'Please Login'
    }
    return 'Welcome User'
  }

  render() {
    const b = this.buttonText()
    const h = this.heading()
    return (
      <div>
        <h1>{h}</h1>
        <button onClick={this.isTrue}>{b}</button>
      </div>
    )
  }
}

export default Home

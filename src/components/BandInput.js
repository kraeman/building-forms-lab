// Add BandInput component
import React, { Component } from 'react'
// import { uuid } from 'uuid'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let band = {id: uuid(), ...this.state}
  //   this.props.addBand(band)
  //   this.setState({
  //     name: ''
  //   })
  // }

  render() {
    return(
      <div>
          <form onSubmit={() => this.props.addBand(this.state)}>
            <label>
              Name:
              <input onChange={(e) => this.handleChange(e)} value={this.state.name} type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}

export default BandInput

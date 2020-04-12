import React, { Component } from 'react';

class InputEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseDown: false,
      mouseClicked: 0,
      inputText: 'Hello world',
      formInputText: 'Hello world 2'
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleClick(){
    this.setState( (state) => {
      return {
        mouseClicked: state.mouseClicked + 1
      }
    })
    console.log(this.state.mouseClicked)
  }

  handleMouseDown(){
    this.setState({
      mouseDown: true
    })
  }

  handleMouseUp(){
    this.setState({
      mouseDown: false
    })
  }

  handleOnChange(event){
    this.setState({
      inputText: event.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.setState({
      formInputTextSubmitted: this.state.formInputText
    })
  }

  render() {
    return (
      <>
      <section>
        <h3>Mouse events:</h3>
        <button 
              onClick={this.handleClick}
              onMouseDown={this.handleMouseDown} 
              onMouseUp={this.handleMouseUp} 
              >
          Click me
        </button>
        <p>Button mouse down: {this.state.mouseDown ? 'true' : 'false'}</p>
        <p>Button clicked: {this.state.mouseClicked}</p>
      </section>

      <section>
        <h3>Input change events:</h3>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleOnChange}
        />
        <p>Input value: {this.state.inputText}</p>
      </section>

      <section>
        <h3>Form Submit events:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.formInputText}
          />
          <button type="submit">Submit</button>
          <p>Input value: {this.state.formInputText}</p>
          <p>Submitted value: {this.state.formInputTextSubmitted}</p>
        </form>
      </section>
      </>
    )
  }
}

export default InputEvents;
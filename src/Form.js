import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: ''
    }
    state = this.initialState

    handleChange = event => {
        const {name, value} = event.target 
        console.log(name, value)

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const{name, job} = this.state 

        return (
            <form handleSubmit={this.handleSubmit}>
                <label className="control-label" htmlFor="name">Name</label>
                <input className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label className="control-label" htmlFor="job">Job</label>
                <input className="form-control"
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" className="btn btn-primary pull-right" value="확 인" onClick={ this.submitForm } />
            </form>
        )
    }
}

export default Form;

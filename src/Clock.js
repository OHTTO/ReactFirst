import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date(),  }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick()
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h4>현재 시간 : {this.state.date.toLocaleTimeString() } </h4>
            </div>
        )
    }
}

export default Clock
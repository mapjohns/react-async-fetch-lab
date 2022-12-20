// create your App component here

import React, { Component } from "react";


class App extends Component {

    constructor() {
        super()
        this.state = {
            peopleInSpace: [],
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    peopleInSpace = () => {
        console.log(this.state.peopleInSpace)
        return this.state.peopleInSpace.map(a => a.name)
    }

    render() {
        return (
            <div>{this.peopleInSpace()}</div>
        )
    }
}

export default App
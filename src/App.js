// create your App component here
import React, { Component } from 'react'
const spaceUrl = 'http://api.open-notify.org/astros.json'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
          <div>
            {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
          </div>
        )
    }

    componentDidMount() {
        fetch(spaceUrl)
            .then(res => res.json())
            .then(({people}) => this.setState({ peopleInSpace: people }))
    }
}

export default App
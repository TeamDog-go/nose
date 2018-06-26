import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './App.css'

import breederQuestions from './BreederQuestions'
import Quiz from './Quiz'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      source: 'breeder'
    }
  }

  render () {
    if (this.state.source === 'breeder') {
      return (
        <div className='App'>
          <Route path='/' render={(props) => <Quiz questions={breederQuestions} />} />
        </div>
      )
    } else { return null }
  }
}

export default App

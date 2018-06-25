import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'

class IntroPage extends Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <div className='introPageDiv'>
        <header className='header'>
          <h2 className='header'>PupSource</h2>
        </header>
        <p>Paragraph text</p>
        {/* image */}
        <Button onClick='' label='Previous' />
        <Button onClick='' label='Next' />
      </div>
    )
  }
}

export default IntroPage

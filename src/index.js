import React from 'react'
import ReactDom from 'react-dom'

import Lion from './component/Lion.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lion : <Lion />
    }
  }

  saidLion(e) {
    this.setState({
      lion : <Lion heSaid={e.target.value}/>
    })
  }

  render() {
    return (
      <div className="main">
        {this.state.lion}

        <input
          type="text"
          className="lion-say"
          onChange={::this.saidLion}
        />
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.querySelector('#omaesore')
)

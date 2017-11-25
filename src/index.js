import React from 'react'
import ReactDom from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar'

import Lion from './component/Lion.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lion : <Lion updateHandler={::this.saveAsciiArt} />,
      cripAsciiArt : '',
      cripComplete : false
    }
  }

  saidLion(e) {
    this.setState({
      lion : (
        <Lion
          heSaid={e.target.value}
          updateHandler={::this.saveAsciiArt}
        />
      )
    })
  }

  saveAsciiArt(cripAsciiArt) {
    this.setState({ cripAsciiArt })
  }

  cripAsciiArt() {
    const cripElement = document.createElement('div')
    cripElement.appendChild(document.createElement('pre')).textContent = this.state.cripAsciiArt

    const style = cripElement.style
    style.position = 'fixed'
    style.left = '-100%'

    document.body.appendChild(cripElement)
    document.getSelection().selectAllChildren(cripElement)

    this.setState({ 
      cripComplete : document.execCommand('copy')
    })

    document.body.removeChild(cripElement)
  }

  render() {
    return (
      <div className="main">
        {this.state.lion}

        <div>
          <input
            type="text"
            className="lion-say"
            onChange={::this.saidLion}
          />
        </div>

        <div className="margin-top-low">
          <FlatButton
            label="クリップボードにコピー"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            icon={<i className="material-icons">content_copy</i>}
            labelStyle={{
              fontSize : '1.3em'
            }}
            style={{
              color:'#ffffff',
              weight : '80vw',
              height : '9vh'
            }}
            onClick={::this.cripAsciiArt}
          />
          <Snackbar
            open={this.state.cripComplete}
            message="クリップボードにコピーしました!"
            autoHideDuration={4000}
          />
        </div>
      </div>
    )
  }
}

ReactDom.render(
  (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  ),
  document.querySelector('#omaesore')
)

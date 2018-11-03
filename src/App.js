import React, { Fragment, Component } from 'react';
import Gallery from './Gallery'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accessToken: null,
      pictures: [],
    }
  }

  handleClick = () => {
    window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=b3f2ba7886a44b2f9e7c6328b5bc6e58&redirect_uri=http://localhost:3001&response_type=token'
  }

  static getDerivedStateFromProps(props, state) {
    if (state.accessToken) return null

    const match = window.location.href.match(/#access_token=([\d\w.]*)/)

    if (match) {
      state['accessToken'] = match[1]
    }

    return null
  }

  componentDidMount() {
    fetch(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.state.accessToken}`,
      {
        method: 'GET',
        Accept: 'application/json',
        mode: 'cors',
      }
    )
    .then(response => response.json())
    .then(res => {
      const pictures = res.data.map(instagramItem => (
        {
          id: instagramItem.id,
          src: instagramItem.images.standard_resolution.url,
          caption: instagramItem.caption.text,
        }
      ))

      this.setState({ pictures })
    })
  }

  render() {
    const { accessToken, pictures } = this.state

    return (
      <div style={ styles }>
        {!accessToken && (
          <button onClick={this.handleClick}>
            Show Insta
          </button>
        )}
        {pictures && (
          <Fragment>
            <Gallery pictures={pictures} />
          </Fragment>
        )}
      </div>
    );
  }
}

const styles = {
  maxWidth: '90%',
  margin: '0 auto',
}

export default App;

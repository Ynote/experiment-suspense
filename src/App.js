import React, { lazy, Suspense, Component } from 'react';
//import Gallery from './Gallery'

let pictures
let accessToken
const Gallery = lazy(() => {
  return fetch(
    `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`,
    {
      method: 'GET',
      Accept: 'application/json',
      mode: 'cors',
    }
  )
  .then(response => response.json())
  .then(res => {
    pictures = res.data.map(instagramItem => (
      {
        id: instagramItem.id,
        src: instagramItem.images.standard_resolution.url,
        caption: instagramItem.caption.text,
      }
    ))

    return import('./Gallery')
  })
})

class App extends Component {
  state = {}

  handleClick = () => {
    window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=b3f2ba7886a44b2f9e7c6328b5bc6e58&redirect_uri=http://localhost:3001&response_type=token'
  }

  static getDerivedStateFromProps(props, state) {
    if (accessToken) return null

    const match = window.location.href.match(/#access_token=([\d\w.]*)/)

    if (match) {
      accessToken = match[1]
    }

    return null
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={ styles }>
        {!accessToken && (
          <button onClick={this.handleClick}>
            Show Insta
          </button>
        )}
        <Suspense fallback={<div>Loading gallery…</div>}>
          <Gallery pictures={pictures} />
        </Suspense>
      </div>
    );
  }
}

const styles = {
  maxWidth: '90%',
  margin: '0 auto',
}

export default App;

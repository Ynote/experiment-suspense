import React, { lazy, Suspense, Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
//import Image from './Image'

const ImageContainer = lazy(() => import('./Image'))

class ImageCard extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  static defaultProps = {
    alt: '',
    width: '200px',
    height: '200px',
  }

  state = {
    src: null,
  }

  componentDidMount() {
    const downloadingImage = new Image()
    downloadingImage.src = this.props.src
    downloadingImage.onload = event => {
      this.setState({ src: event.path[0].src })
    }
  }

  render() {
    const { src, alt, width, height } = this.props

    return(
      <figure style={ styles }>
        {this.state.src && (
          <Suspense fallback={<div>Loading image…</div>}>
            <ImageContainer src={this.state.src} alt={alt} />
          </Suspense>
        )}
      </figure>
    )
  }
}

const styles = {
  flexGrow: 1,
  flexBasis: '400px',
  display: 'flex',
  alignItems: 'center',
  margin: '0.5rem',
  backgroundColor: '#eee',
}

export default Radium(ImageCard)

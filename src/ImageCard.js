import React, { lazy, Suspense, Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

const Image = lazy(() => import('./Image'))

class Loader extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
  }

  static defaultProp = {
    width: '200px',
    height: '200px',
  }

  render() {
    const { width, height } = this.props
    const styles = { width, height }

    return (
      <div style={ styles }>
        Loading…
      </div>
    )
  }
}

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

  render() {
    const { src, alt, width, height } = this.props

    return(
      <figure style={ styles }>
        <Suspense
          fallback={<Loader width={`${width}px`} height={`${height}px`} />}
        >
          <Image src={src} alt={alt} />
        </Suspense>
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

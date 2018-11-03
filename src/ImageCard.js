import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import Image from './Image'

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
        <Image src={src} alt={alt} />
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

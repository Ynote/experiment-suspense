import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }

  static defaultProps = {
    alt: '',
  }

  render() {
    const { src, alt } = this.props

    return (
      <img
        src={src}
        alt={alt}
        style={ { width: '100%' } }
      />
    )
  }
}

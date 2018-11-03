import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import ImageCard from './ImageCard'

class Gallery extends Component {
  static propTypes = {
    pictures: PropTypes.array.isRequired,
  }

  render() {
    const { pictures } = this.props

    return (
      <div style={ styles }>
        {
          pictures.map(picture => {
            const { id, src, alt, width, height, caption } = picture

            return (
              <ImageCard
                key={id}
                src={src}
                alt={alt}
                width={width}
                height={height}
              />
            )
          })
        }
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
}

export default Radium(Gallery)

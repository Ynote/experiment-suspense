import React, { lazy, Suspense, Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

const ImageCard = lazy(() => import('./ImageCard'))

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
    const loaderStyles = { width: '400px', height: '400px' }

    return (
      <div style={ loaderStyles }>
        Loading…
      </div>
    )
  }
}

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
            const { id, src, alt, caption } = picture

            return (
              <Suspense
                fallback={<Loader />}
              >
                <ImageCard
                  key={id}
                  src={src}
                  alt={alt}
                  width={400}
                  height={400}
                />
              </Suspense>
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

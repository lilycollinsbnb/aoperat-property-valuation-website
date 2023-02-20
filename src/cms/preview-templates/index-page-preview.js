import React from 'react'
import PropTypes from 'prop-types'
import HomePageBody from '../../templates/body/index-page-body'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <HomePageBody
        carouselItems={data.carouselItems.map(x => {return {image: getAsset(x.image), text: x.text}})}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview

import React from 'react'
import PropTypes from 'prop-types'
import AboutPageBody from '../../templates/body/about-page-body';


const AboutPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <AboutPageBody
      title={data.title}
      subheading={data.subheading}
      image={getAsset(data.image)}
      content={widgetFor('body')}
    />
  )


}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default AboutPagePreview

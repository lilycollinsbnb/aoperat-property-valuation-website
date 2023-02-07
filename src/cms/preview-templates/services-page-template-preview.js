import React from 'react'
import PropTypes from 'prop-types'
import ServicesPageBody from '../../templates/body/services-page-body';

const ServicesPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <ServicesPageBody
      title={data.title}
      subheading={data.subheading}
      image={getAsset(data.image)}
      listSectionTitle={data.listSectionTitle}
      listItems={data.listItems}
      contactSectionTitle={data.contactSectionTitle}
      contactSectionText={data.contactSectionText}
      content={widgetFor('body')}
    />
  )


}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ServicesPagePreview

import React from 'react'
import PropTypes from 'prop-types'
import { PostTemplate } from '../../templates/blog-post'

const PostPreview = ({ entry, getAsset, widgetFor }) => {
  const image = entry.getIn(['data', 'featuredImage'])

  return (
    <PostTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      image={getAsset(image)}
    />
  )
}

PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default PostPreview

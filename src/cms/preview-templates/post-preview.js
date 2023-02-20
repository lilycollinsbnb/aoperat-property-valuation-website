import React from 'react'
import PropTypes from 'prop-types'
import PostBody from '../../templates/body/blog-post-body'

const PostPreview = ({ entry, getAsset, widgetFor }) => {
  const image = entry.getIn(['data', 'featuredImage'])

  return (
    <PostBody
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

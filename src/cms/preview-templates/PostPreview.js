import React from 'react'
import { PostTemplate } from '../../templates/Post'

const PostPreview = ({ entry, widgetFor }) => (
  <PostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default PostPreview

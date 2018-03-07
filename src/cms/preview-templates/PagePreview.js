import React from 'react'
import { PageTemplate } from '../../templates/Page'

const PagePreview = ({ entry, widgetFor }) => (
  <PageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default PagePreview

import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

const MarkdownPreview = ({ md }) => {
  return <ReactMarkdown source={md} escapeHtml={false} skipHtml={false} />
}

export default MarkdownPreview

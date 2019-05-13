import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

const MarkdownPreview = ({ md }) => {
  return <ReactMarkdown source={md} esacapeHtml={false} skipHtml={false} />
}

export default MarkdownPreview

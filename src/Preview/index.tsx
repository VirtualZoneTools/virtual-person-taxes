import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface MarkdownPreviewProps {
  md: string
}

const MarkdownPreview: React.VFC<MarkdownPreviewProps> = ({ md }) => {
  return <ReactMarkdown children={md} skipHtml={false} rehypePlugins={[rehypeRaw]} />
}

export default MarkdownPreview

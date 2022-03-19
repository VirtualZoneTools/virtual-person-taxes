import { Heading, Input, OrderedList, UnorderedList, Text, Divider, Box } from '@chakra-ui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import { FormState } from '../App'
import generateStepsMD from '../generator'

interface MarkdownPreviewProps {
  data: FormState
}

const MarkdownPreview: React.VFC<MarkdownPreviewProps> = ({ data }) => {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => <Heading as="h1" size="3xl" {...props} />,
        h2: (props) => <Heading as="h2" size="2xl" {...props} />,
        h3: (props) => <Heading as="h3" size="xl" {...props} />,
        h4: (props) => <Heading as="h4" size="lg" {...props} />,
        h5: (props) => <Heading as="h5" size="md" {...props} />,
        h6: (props) => <Heading as="h6" size="xs" {...props} />,
        ul: UnorderedList,
        ol: OrderedList,
        p: (props) => <Text as="p" {...props} />,
        strong: (props) => <Text as="strong" {...props} fontWeight="bold" />,
        em: (props) => <Text as="em" {...props} fontStyle="italic" />,
        input: (props) => <Input {...props} size="xs" fontWeight="bold" width="min" />,
      }}
      children={generateStepsMD(data)}
      skipHtml={false}
      rehypePlugins={[rehypeRaw]}
    />
  )
}

export default MarkdownPreview

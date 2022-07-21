import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import {
  Heading,
  Input,
  OrderedList,
  UnorderedList,
  Text,
  Link,
  useColorModeValue,
  Stack,
  Container,
  IconButton,
  Icon,
} from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'
import { BiX } from 'react-icons/bi'

import generateMarkdownContent from '../utils/contentGenerator'
import { useDeclaration } from '../contexts/DeclarationContext'

const Preview: FC = () => {
  const [declaration] = useDeclaration()
  const markdownContent = generateMarkdownContent(declaration)
  const textColor = useColorModeValue('gray.800', 'gray.400')
  const strongTextColor = useColorModeValue('gray.900', 'gray.300')

  return (
    <Container as={Stack} maxW="container.md" paddingY={4} paddingX={8}>
      <IconButton
        as={RouteLink}
        to="/"
        aria-label="რედაქტირება"
        size="md"
        variant="ghost"
        colorScheme="blue"
        borderRadius="full"
        icon={<Icon as={BiX} />}
        position="absolute"
        right={4}
        top={4}
      />

      <ReactMarkdown
        components={{
          h1: (props) => <Heading as="h1" size="3xl" {...props} />,
          h2: (props) => <Heading as="h2" size="2xl" {...props} />,
          h3: (props) => <Heading as="h3" size="xl" {...props} />,
          h4: (props) => <Heading as="h4" size="lg" {...props} />,
          h5: (props) => <Heading as="h5" size="md" {...props} />,
          h6: (props) => <Heading as="h6" size="xs" {...props} />,
          ul: (props) => <UnorderedList {...props} fontSize="sm" color={textColor} />,
          ol: (props) => <OrderedList {...props} fontSize="sm" color={textColor} />,
          p: (props) => <Text as="p" {...props} fontSize="sm" color={textColor} />,
          em: (props) => (
            <Text as="em" {...props} fontStyle="italic" fontSize="sm" color={textColor} />
          ),
          strong: (props) => (
            <Text
              as="strong"
              {...props}
              fontWeight="semibold"
              fontSize="sm"
              color={strongTextColor}
            />
          ),
          a: (props) => (
            <Link as="a" {...props} color="blue.600" fontWeight="bold" isExternal fontSize="sm" />
          ),
          input: (props) => (
            <Input
              {...props}
              value={undefined}
              defaultValue={props.value}
              size="xs"
              fontWeight="bold"
              textColor="blue.600"
              width="min"
            />
          ),
        }}
        children={markdownContent}
        skipHtml={false}
        rehypePlugins={[rehypeRaw]}
      />
    </Container>
  )
}

export default Preview

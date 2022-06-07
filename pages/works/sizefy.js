import {
 
  Container,
  Badge,
  Link,
  List,
  ListItem,
 
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Sizefy">
    <Container>
      <Title>
        Sizefy <Badge>2022</Badge>
      </Title>
      <P>An Extension to show size of the github repos</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Chome Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Meditatingpanda/sizefy">
            Source <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sizefy.png" alt="sizefy" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

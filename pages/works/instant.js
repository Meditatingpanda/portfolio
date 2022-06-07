import {
  Container,
  Badge,
  Link,
  List,
  ListItem
  // AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Instant Apps">
    <Container>
      <Title>
        Instant Apps <Badge>2022</Badge>
      </Title>
      <P>
        Instant apps are the small interactive cards which you get for your
        search queries. We can build instant apps for all kinds of use cases
        like dictionary, checking football scores, stock prices or notes from
        your notion or even search history from company slack or anything!
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Chrome Extension</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            nodejs, javascript, search, search-engine ,npm, typescript ,apps
            plugins developer-tools
          </span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/felvin-search/instant-apps">
            Instant Apps <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/instant_1.png" alt="instant" />
      <WorkImage src="/images/works/instant_2.png" alt="instant" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

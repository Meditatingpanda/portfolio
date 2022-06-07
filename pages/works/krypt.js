import {
  Container,
  Badge,
  Link,
  List,
  ListItem
  // SimpleGrid
  // UnorderedList,
  // Heading,
  // Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Krypt">
    <Container>
      <Title>
        Krypt Marketplace <Badge>2022</Badge>
      </Title>
      <P>
        A blockchain based transaction platform incorporated with Metamask.
        Modern Design and Wrote smart contract using solidity deployed at
        HardHat. Each transaction occured on Ethereum blockchain
      </P>
      {/* <P>
        This service has been closed. Thank you for over 130,000 registered
        users!
      </P> */}
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://krypt-60755.web.app/">
            https://krypt-60755.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Responsive for all devices mostly</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2016/09/06/farewell-from-walknote/">
            音楽発掘アプリwalknoteクローズのお知らせ{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Stack</Meta>
          <span>React js,Tailwind,Solidity,Javascript</span>
        </ListItem>
      </List>

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid> */}
      <WorkImage src="/images/works/krypt_1.png" alt="krypt" />
      <WorkImage src="/images/works/krypt_2.png" alt="krypt" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

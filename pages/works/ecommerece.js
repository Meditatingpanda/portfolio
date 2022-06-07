import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="EcommerceSite">
    <Container>
      <Title>
        Headless Ecommerce Site <Badge>2021</Badge>
      </Title>
      <P>
        A headless Ecommerce site using Commercejs as its backend. Items are
        added to cart, modified, checkout,receipt and remove. Firebase login is
        added. Fully Responsive, sleek UI,Modern designs are key points forthis.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://e-commercesite-8d3a4.web.app/">
            https://e-commercesite-8d3a4.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Responsive In Almost all devices</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React js,Tailwind,Firebase Auth,Javascript,Commerce Js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ecommerce_1.png" alt="ecommerceJs" />
      <WorkImage src="/images/works/ecommerce_2.png" alt="ecommerceJs" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Felvin">
    <Container>
      <Title>
        Felvin <Badge>2022</Badge>
      </Title>
      <P>A startup based inNew York, NY.</P>
      <P>
        Developed new landing page and made pre-existing landing page 25%
        faster. Solved content-security-policy related bug in their chrome
        extensions and launched new versions of the extension. Released new
        stable npm package having 300+ weekly downloads.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js / TypeScript / Vercel / npm/ webpack /styled-components/
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

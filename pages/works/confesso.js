import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="confesso">
    <Container>
      <Title>
        Confesso <Badge>2022-</Badge>
      </Title>
      <P>
        Full Stack Social media web app designed to tackle imposter syndrome.
        Supports CRUD operations. Used NodeJs as Backend and MongoDB as database
        and firebase storage for file uploading.Front-end uses React-js and
        material UI and redux toolkit for state management.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://confesso-2.web.app/">
            https://confesso-2.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Responsive In Almost all devices</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React.js,Material- UI,MongoDB,ExpressJs,Redux,Firebase,Mongoose
          </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works/confesso_1.png" alt="confesso" />
      <WorkImage src="/images/works/confesso_2.png" alt="confesso" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

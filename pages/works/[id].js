import {
  Container,
  Badge,
  Link,
  List,
  ListItem
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import client from '../../lib/notion'

const Work = ({ work }) => {
  const { projects, desc, website, stack, imgs } = work[0].properties
  const imgsList = imgs.rich_text.filter((img, index) => index % 2 === 0)

  return (
    <Layout title="confesso">
      <Container>
        <Title>
          {projects.title[0].plain_text} <Badge>2022-</Badge>
        </Title>
        <P>{desc.rich_text[0].plain_text}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href={website.rich_text[0].plain_text}>
              {website.rich_text[0].plain_text} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Responsive In Almost all devices</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>{stack.rich_text[0].plain_text}</span>
          </ListItem>
          {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        </List>
        {imgsList.map((img, id) => {
          return (
            <WorkImage
              key={id}
              src={img.text.link.url}
              alt={projects.title[0].plain_text}
            />
          )
        })}

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
}

export default Work

export async function getStaticPaths() {
  const databaseId = process.env.NEXT_PUBLIC_WORK_DB
  const res = await client.databases.query({
    database_id: databaseId
  })

  // Get the paths we want to pre-render based on posts
  const paths = res.results.map(post => ({
    params: { id: post.id }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const databaseId = process.env.NEXT_PUBLIC_WORK_DB
  const res = await client.databases.query({
    database_id: databaseId
  })

  const work = res.results.filter(key => params.id === key.id)

  // Pass post data to the page via props
  return { props: { work } }
}

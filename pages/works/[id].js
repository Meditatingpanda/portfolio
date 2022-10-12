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
// import client from '../../lib/notion'
import Client, { urlFor } from '../../lib/sanity'


const Work = ({ work }) => {
  console.log(work)
  // const { projects, desc, website, stack, imgs } = work[0].properties
  // const imgsList = imgs.rich_text.filter((img, index) => index % 2 === 0)

  return (
    <Layout title="confesso">
      <Container>
        <Title>
          {work[0].title} <Badge>2022-</Badge>
        </Title>
        <P>{work[0].desc}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href={work[0].link}>
              {work[0].link} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Responsive In Almost all devices</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>

            {work && work[0].stacks.map((item, id) => <Badge colorScheme="cyan" mr={2} key={id}> {item}</Badge>)}



          </ListItem>
          {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        </List>
        {work[0].image.map((img, id) => {
          return (
            <WorkImage
              key={id}
              src={urlFor(img.asset._ref).height(500).url()}
              alt={work[0].title}
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
  // const databaseId = process.env.NEXT_PUBLIC_WORK_DB
  // const res = await client.databases.query({
  //   database_id: databaseId
  // })
  const works = await Client.fetch(`*[_type == "work"]`)

  // Get the paths we want to pre-render based on posts
  const paths = works.map(post => ({
    params: { id: post._id }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const databaseId = process.env.NEXT_PUBLIC_WORK_DB
  // const res = await client.databases.query({
  //   database_id: databaseId
  // })
  const works = await Client.fetch(`*[_type == "work"]`)
  const work = works.filter(key => params.id === key._id)

  // Pass post data to the page via props
  return { props: { work } }
}

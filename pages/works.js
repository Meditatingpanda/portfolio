import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
// import instant from '../public/images/Collabrations/instantsApps.png'
// import felvin from '../public/images/Collabrations/felvin.png'
import Client, { urlFor } from '../lib/sanity'
// import client from '../lib/notion'

const Works = ({ works, internships }) => {
  // console.log(urlFor(internships[0].image.asset._ref))

  // console.log(internships)
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {works.map(work => {
            //const { title, projects, img } = work.properties

            return (
              <Section key={work._id}>
                <WorkGridItem
                  id={work._id}
                  title={work.title}
                  thumbnail={urlFor(work.image[0].asset._ref).height(600).url()}
                >
                  {work.shortDescription}
                </WorkGridItem>
              </Section>
            )
          })}
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {
            internships.map(internship => {
              return (
                <Section key={internship._id}>
                  <WorkGridItem
                    id={`internship?q=${internship._id}`}
                    title={internship.title}
                    thumbnail={urlFor(internship.image.asset._ref).width(600).url()}
                  >
                    {internship.shortDescription}
                  </WorkGridItem>
                </Section>
              )
            })
          }

          {/* 
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="MAXTAP"
          >
            Start Up to Modernize the traditional ads system
          </WorkGridItem>
        </Section> */}
        </SimpleGrid>

        {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
      </Container>
    </Layout>
  )
}

export default Works

export async function getStaticProps() {
  let works = await Client.fetch(`*[_type == "work"]`)
  const internships = await Client.fetch(`*[_type == "internship"]`)
  works = works.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
  //console.log(works)
  // const databaseId = process.env.NEXT_PUBLIC_WORK_DB
  // const res = await client.databases.query({
  //   database_id: databaseId
  // })

  return {
    props: {
      works,
      internships
    }

  }

}

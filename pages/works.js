import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'

import confesso from '../public/images/projects/confesso.png'
import krypt from '../public/images/projects/krypt.png'
import ecommerce from '../public/images/projects/ecommerce.png'
import instant from '../public/images/Collabrations/instantsApps.png'
import felvin from '../public/images/Collabrations/felvin.png'
import sizefy from '../public/images/projects/sizefy.png'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="confesso" title="CONFESSO" thumbnail={confesso}>
            Full Stack Social media web app designed to tackle imposter
            syndrome.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="krypt"
            title="KRYPT MARKETPLACE"
            thumbnail={krypt}
          >
            Crypto Transactions marketplace
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="ecommerece"
            title="ECOMMERCE WEBSITE"
            thumbnail={ecommerce}
          >
            A headless ecommerce website
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="sizefy" thumbnail={sizefy} title="sizefy">
            An extension to show the size of the GitHub repository.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="instant" thumbnail={instant} title="Instant Apps">
            Instant apps are the small interactive cards which you get for your
            search queries.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="felvin" thumbnail={felvin} title="FELVIN SEARCH">
            A Startup to add Addrenaline  to  your search Engine
          </WorkGridItem>
        </Section>
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

export default Works
export { getServerSideProps } from '../components/chakra'

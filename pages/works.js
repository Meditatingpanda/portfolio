import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
import confesso from '../public/images/projects/confesso.png'
import krypt from '../public/images/projects/krypt.png'
import ecommerce from '../public/images/projects/ecommerce.png'
import instant from '../public/images/Collabrations/instantsApps.png'
import felvin from '../public/images/Collabrations/felvin.png'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="CONFESSO" thumbnail={confesso}>
            React.js,Material-UI,MongoDB,ExpressJs,Redux,Firebase,Mongoose
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="KRYPT MARKETPLACE"
            thumbnail={krypt}
          >
            React js,Tailwind,Solidity,Javascript
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="ECOMMERCE WEBSITE"
            thumbnail={ecommerce}
          >
            React js,Tailwind,Firebase Auth,Javascript,Commerce Js
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
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
          <WorkGridItem id="styly" thumbnail={instant} title="Instant Apps">
            Instant apps are the small interactive cards which you get for your
            search queries.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="margelo"
            thumbnail={felvin}
            title="FELVIN SEARCH"
          >
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="MAXTAP"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
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

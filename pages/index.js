import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import {AiOutlineMail} from 'react-icons/ai'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})



const Home = () => {

 

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a Web developer based in India!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gyana Ranjan Panda
            </Heading>
            <p>Digital Craftsman ( Traveller / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/dp.png"
                alt="Profile image"
                borderRadius="full"
                objectFit={'cover'}
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            My name is GYANA RANJAN PANDA and I am a freelance web developer. I
            am constantly learning web and app technologies and other design
            related topics, currently playing around with NODEJS, REACTJS,
            NEXTJS. I also like to code in C++, Python. I like to do traveling
            and binging anime in my free time. I’m currently available for work
            and taking on new projects, so feel free to contact me{' '}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Timeline
          </Heading>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working as SDE Intern{' '}
            <Link href="https://twitter.com/FelvinSearch" target="_blank">
              @FelvinSearch
            </Link>
          </BioSection>

          <BioSection>
            <BioYear>2022</BioYear>
            Won{' '}
            <Link
              href="https://certopus.com/c/f75be7d8a6f4402292d725f23674f918"
              target="_blank"
            >
              Felvin Open Source
            </Link>{' '}
            , HackOFiesta v3.0, hackathon held as part of Equinox, the techfest
            of IIIT Lucknow
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Global Rank 15 October Challenge 2021 Division 3, Codechef
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Joined VSSUT, For Btech CSE
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Anime, Music,{' '}
            <Link
              href="https://www.instagram.com/traveling_monk_7/"
              target="_blank"
            >
              Traveling
            </Link>
            , Competitive Programming
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Meditatingpanda" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @Meditatingpanda
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/traveling_monk3" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @traveling_monk3
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/meditatingpanda/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<FaLinkedin />}
                >
                  @meditatingpanda
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/traveling_monk_7/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @traveling_monk_7
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

          <Box align="center" my={4}>
            <NextLink href="mailto:grp.gyanaranjan@gmail.com"  passHref scroll={false}>
              <Button rightIcon={<AiOutlineMail />} colorScheme="teal">
                Contact me
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
export default Home


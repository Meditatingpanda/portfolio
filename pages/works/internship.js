import { Badge, Box, CircularProgress, Container, Link, List, ListItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Layout from "../../components/layouts/article";
import { Meta, Title, WorkImage } from "../../components/work";
import Client, { urlFor } from "../../lib/sanity";
import P from '../../components/paragraph'
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Internship = () => {
    const route = useRouter();

    const [internship, setInternship] = useState(null);
    useEffect(() => {
        if (!route.isReady) {
            return;
        }

        const id = route.query.q;
        const fetch = async () => {

            const internship = await Client.fetch(`*[_type=="internship" && _id=="${id}"]`);
            setInternship(internship[0]);
        }
        fetch();
    }, [route.isReady, route.query.q]);
    console.log(internship);

    return (
        <Layout title={internship && internship.title}>
            <Container>
                {internship ? <><Title>
                    {internship && internship.title} <Badge>{internship && new Date(internship.from).getFullYear()} -</Badge> to <Badge>{internship && new Date(internship.to).getFullYear()}</Badge>

                </Title>
                    <P>{internship && internship.shortDescription}</P>

                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href={internship && internship.url}>
                                {internship && internship.url} <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Location</Meta>
                            <span>{internship && internship.location}</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>

                            {internship && internship.stacks.map((item, id) => <Badge colorScheme="cyan" mr={2} key={id}> {item}</Badge>)}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Meta>Responsibilities</Meta>
                        </ListItem>
                        {
                            internship && internship.desc.map((item, id) => <ListItem key={id} sx={{ color: 'white' }} rounded={4} p={3} color='black' mt={2} mb={2}>{item.children[0].text}</ListItem>)

                        }

                    </List>

                    <WorkImage
                        key={internship && internship._id}
                        src={internship && urlFor(internship.image.asset._ref).height(500).url()}
                        alt={internship && internship.title}
                    /></> : <Box height={"-webkit-fit-content"} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={'48'} >
                    <CircularProgress isIndeterminate color="green.300" alignSelf={'center'} />
                </Box>
                }
            </Container>
        </Layout>
    );
}

export default Internship;


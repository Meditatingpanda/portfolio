import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'



const Client = createClient({
    projectId: "edw3svw6",
    dataset: "production",
    apiVersion: "2022-09-13",
    useCdn: false
});
const builder = imageUrlBuilder(Client)
function urlFor(source) {
    return builder.image(source)
}

export { urlFor }

export default Client;

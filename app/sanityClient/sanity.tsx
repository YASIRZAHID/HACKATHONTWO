import sanityClient from '@sanity/client';
import { createClient, ClientConfig } from 'next-sanity';

const config: ClientConfig = {
  projectId: 'v7d1xoh1',
  dataset: 'production',
  useCdn: true, // Use the cached version of the data
};

const client = createClient(config);

export default client;
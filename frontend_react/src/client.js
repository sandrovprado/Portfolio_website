//this file is where we connect our Sanity client with React application

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:  process.env.REACT_APP_SANITY_PROJECT_ID, //from .env file
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN, //from .env file 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
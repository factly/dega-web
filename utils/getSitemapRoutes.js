/* eslint-disable no-underscore-dangle */
import fetch from 'cross-fetch';
import { sitemapsQuery } from '../graphql/query/sitemap';

export default async function getSitemapRoutes() {
  const sitemap = await fetch('http://localhost:8080/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      client: process.env.CLIENT_ID
    },
    body: JSON.stringify({
      query: sitemapsQuery
    })
  })
    .then(response => response.json())
    .then(p => p.data.sitemap)
    .catch(err => console.log(err));
  const routes = [];
  sitemap.categories.forEach((category) => {
    routes.push({
      url: `category/${category._id}`
    });
  });

  /* sitemap.users.forEach((user) => {
    routes.push({
      url: `user/${user._id}`
    });
  }); */

  sitemap.tags.forEach((tag) => {
    routes.push({
      url: `tag/${tag._id}`
    });
  });

  sitemap.posts.forEach((post) => {
    routes.push({
      url: `post/${post._id}`
    });
  });

  sitemap.factchecks.forEach((factcheck) => {
    routes.push({
      url: `factcheck/${factcheck._id}`
    });
  });

  return routes;
}

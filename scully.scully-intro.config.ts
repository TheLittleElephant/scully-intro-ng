import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-intro',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/cats/:id': {
      type: 'json',
      id: {
        url: 'https://my-json-server.typicode.com/TheLittleElephant/scully-intro/cats',
        property: 'id'
      }
    }
  }
};

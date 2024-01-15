import { resolve } from 'node:path';

export default {
  loaders: [
    'esm-loader-typescript',
    'esm-loader-css',
    'esm-loader-images',
    {
      loader: 'esm-loader-import-meta-custom',
      options: {
        meta: {
          env: {
            VITE_API_URL: process.env.VITE_API_URL,
          },
        }
      },
    },
    {
      loader: 'esm-loader-import-alias',
      options: {
        aliases: {
          '@': `${resolve('src/')}`
        },
      },
    },
  ],
};

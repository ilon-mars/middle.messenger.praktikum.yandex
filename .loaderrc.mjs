import { resolve } from 'node:path';

export default {
  loaders: [
    'esm-loader-typescript',
    'esm-loader-css',
    {
      loader: 'esm-loader-import-alias',
      options: {
        aliases: {
          '@/core/': `${resolve('src/core/')}/`,
          '@/types/': `${resolve('src/types/')}/`,
          '@/enums/': `${resolve('src/enums/')}/`,
          '@/utils/': `${resolve('src/utils/')}/`,
        },
      },
    },
  ],
};

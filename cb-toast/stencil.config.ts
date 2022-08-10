import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.tsx', './src/**/*.css', './src/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

//process.env.NODE_ENV = 'development';
process.env.NODE_ENV = 'production';

export const config: Config = {
  namespace: 'cb-toast',
  rollupPlugins: {
    after: [nodePolyfills()],
  },
  plugins: [
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production' ? [purgecss, require('cssnano')] : []),
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer: {
    reloadStrategy: 'hmr',
  },
};

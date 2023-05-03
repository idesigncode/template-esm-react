export default {
  addons: ['@storybook/addon-docs', 'storybook-dark-mode'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../!(node_modules)/**/*.stories.mdx'],
  webpackFinal: async (config) => {
    config.module.rules.map((rule) => {
      if (!rule.type || rule.type !== 'asset/source') {
        // ? Ensure any loaders are not run on any 'raw' file imports
        rule.resourceQuery = { not: [/raw/] };
      }
      return rule;
    });
    return config;
  },
};

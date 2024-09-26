const {getLoader} = require('@craco/craco');

const config = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({context, webpackConfig}) => {
          console.log(
            webpackConfig.module.rules.find((rule) =>
              rule.hasOwnProperty('oneOf'),
            ),
          );
          const {isFound, match: fileLoaderMatch} = getLoader(
            webpackConfig,
            (rule) => rule.type === 'asset/resource',
          );

          if (!isFound) {
            throw new Error(
              `Can't find file-loader in the ${context.env} webpack config!`,
            );
          }

          fileLoaderMatch.loader.exclude.push(/\.ya?ml$/);

          const yamlLoader = {
            use: 'yaml-loader',
            test: /\.(ya?ml)$/,
          };
          webpackConfig.module.rules.push(yamlLoader);
          return webpackConfig;
        },
      },
    },
  ],
};

module.exports = config;

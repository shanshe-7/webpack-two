module.exports = (api) => {
  api.cache.never();
  return {
    presets: [
      [
        "@babel/env",
        {
          debug: true,
          spec: true,
          loose: false,
          modules: false,
        },
      ],
    ],
  };
};

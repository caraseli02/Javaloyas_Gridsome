// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  mode: "production",

  siteName: "Los Javaloyas",
  siteDescription:
    "Los Javaloyas es uno de los conjuntos más populares y asociados a la música pop española. El grupo en activo mas veterano de España.",
  siteUrl: "javaloyas.com",
  chainWebpack: (config) => {
    config.resolve.alias.set("@img", "@/assets/img");
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    {
      use: "gridsome-plugin-modal",
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "gridsome-plugin-seo",
    },
    {
      use: "gridsome-plugin-purgecss",
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          "./src/**/*.vue",
          "./src/**/*.js",
          "./src/**/*.jsx",
          "./src/**/*.pug",
          "./src/**/*.md",
        ],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
    },
    {
      content: [`./public/**/*.html`, `./src/**/*.vue`],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ""
        );
        return (
          contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
          []
        );
      },
      safelist: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/,
      ],
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};

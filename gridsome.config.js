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
    {
      use: "gridsome-plugin-modal",
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: "gridsome-plugin-seo",
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

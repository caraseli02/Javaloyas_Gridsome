// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Los Javaloyas',
    siteDescription: 'Veterano de los grupos pop españoles, y aún activos!',
    siteUrl: 'javaloyas.com',
    chainWebpack: config => {
        config.resolve.alias.set('@img', '@/assets/img')
    },

    plugins: [
        {
            use: 'gridsome-plugin-modal'
        },
        {
            use: 'gridsome-plugin-tailwindcss'
        },
        {
            use: 'gridsome-plugin-seo'
        },
    ],

    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    }
}

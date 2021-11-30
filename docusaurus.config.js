// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IUDX Documentation',
  tagline: 'Learn about exploring, building , deploying your apps with IUDX',
  url: 'https://docs.iudx.org.in/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IUDX', // Usually your GitHub org/user name.
  projectName: 'IUDX', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo docs
          editUrl: 'https://github.com/datakaveri/iudx-developer-docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo blog
          editUrl:
            'https://github.com/datakaveri/iudx-developer-docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      hideOnScroll: true,
        navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/iudx_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Getting Started',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/new-page', label: 'NewPage', position: 'left'},
          {
            href: 'https://github.com/datakaveri/iudx-developer-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/datakaveri/iudx-developer-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IUDX.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    //   plugins: [
    //     [
    //         '@docusaurus/plugin-sitemap',
    //         {
    //             cacheTime: 600 * 1000, // 600 sec - cache purge period
    //             changefreq: 'weekly',
    //             priority: 0.5,
    //         },
    //     ],
    // ],
    }),
};

module.exports = config;

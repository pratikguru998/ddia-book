// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data Systems Book',
  tagline: 'Visual study notes on designing data-intensive applications.',
  favicon: 'img/favicon.ico',
  future: {v4: true},
  // GitHub Pages: https://<user>.github.io/<repo>/  (override locally with BASE_URL=/)
  url: 'https://pratikguru998.github.io',
  baseUrl: process.env.BASE_URL || '/ddia-book/',
  organizationName: 'pratikguru998',
  projectName: 'ddia-book',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {hashed: true, indexBlog: false, docsRouteBasePath: '/docs', highlightSearchTermsOnTargetPage: true},
    ],
  ],
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {sidebarPath: './sidebars.js', showLastUpdateTime: false},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      mermaid: {theme: {light: 'default', dark: 'dark'}},
      navbar: {
        title: 'Data Systems Book',
        logo: {alt: 'Data Systems Book', src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'book', position: 'left', label: '📚 Chapters'},
          {to: '/docs/cheat-sheet', label: '⚡ Cheat sheet', position: 'left'},
          {to: '/docs/glossary', label: '🔤 Glossary', position: 'left'},
          {to: '/docs/start-here', label: '🗺️ Start here', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Personal study notes · original text and diagrams · chapter structure follows Kleppmann's <em>Designing Data-Intensive Applications</em> (O'Reilly, 2017)`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['sql', 'json', 'protobuf']},
    }),
};

export default config;

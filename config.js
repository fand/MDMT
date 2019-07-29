module.exports = {
  defaultLanguage: 'en',
  languages: {
    en: 'English',
    ja: '日本語',
  },
  sidebar: {
    en: [
      ['Home', '/'],
      ['Getting Started', '/getting-started'],
      ['FAQ', '/faq'],
      ['Features', [
        ['CLI', '/features/cli'],
      ]],
    ],
    ja: [
      ['ホーム', '/ja'],
      ['使い方', '/ja/getting-started'],
      ['よくある質問', '/ja/faq'],
      ['機能', [
        ['CLI', '/ja/features/cli'],
      ]],
    ]
  },
  header: {
    en: [
      ['GitHub', 'https://github.com/fand/mdmx'],
    ]
  },
};

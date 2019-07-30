module.exports = {
    // Default values for frontmatter data
    frontmatter: {
        title: "💊MDMT💊 Markdown Document Template  #MDMTjs",
        color: "#FFDD0088"
    },

    // Metadata
    siteName: "💊MDMT💊 Markdown Document Template",
    description:
        "MDMT is a deadsimple document site generator, powered by Next.js and MDX. You can easily create documents with Markdown.",
    url: "https://gmork.in/MDMT",
    image: "/static/images/ogimage.png",
    twitterAccount: "@amagitakayosi",

    // I18n settings.
    // Use language code in ISO 639-1 format.
    defaultLanguage: "en",
    languages: {
        en: "English",
        ja: "日本語"
    },

    // Sidebar links settings.
    sidebar: {
        en: [
            ["Home", "/"],
            ["Getting Started", "/getting-started"],
            ["FAQ", "/faq"],
            ["Features", [["CLI", "/features/cli"]]]
        ],
        ja: [
            ["ホーム", "/ja"],
            ["使い方", "/ja/getting-started"],
            ["よくある質問", "/ja/faq"],
            ["機能", [["CLI", "/ja/features/cli"]]]
        ]
    },

    // Header links settings.
    header: {
        en: [["GitHub", "https://github.com/fand/mdmt"]]
    }
};

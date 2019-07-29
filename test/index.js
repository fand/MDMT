const test = require("tape");
const {
  getPathForLang,
  prefixUrl,
  removePrefixFromPath,
  removeLanguageFromPath
} = require("../lib/utils");
const nextConfig = require("../next.config");

test("getPathForLang", t => {
  t.plan(6);

  t.equal(getPathForLang("en", "/"), "/");
  t.equal(getPathForLang("en", "/foo"), "/foo");
  t.equal(getPathForLang("en", "/foo/bar"), "/foo/bar");

  t.equal(getPathForLang("ja", "/"), "/ja");
  t.equal(getPathForLang("ja", "/foo"), "/ja/foo");
  t.equal(getPathForLang("ja", "/foo/bar"), "/ja/foo/bar");
});

test("prefixUrl", t => {
  t.plan(6);
  const prefix = nextConfig.assetPrefix;

  t.equal(prefixUrl("/"), `${prefix}/`);
  t.equal(prefixUrl("/foo"), `${prefix}/foo`);
  t.equal(prefixUrl("/foo/bar"), `${prefix}/foo/bar`);

  t.equal(prefixUrl("/ja"), `${prefix}/ja`);
  t.equal(prefixUrl("/ja/foo"), `${prefix}/ja/foo`);
  t.equal(prefixUrl("/ja/foo/bar"), `${prefix}/ja/foo/bar`);
});

test("removePrefixFromPath", t => {
  t.plan(7);
  const prefix = nextConfig.assetPrefix;

  t.equal(removePrefixFromPath(`${prefix}`), `/`);
  t.equal(removePrefixFromPath(`${prefix}/`), `/`);
  t.equal(removePrefixFromPath(`${prefix}/foo`), `/foo`);
  t.equal(removePrefixFromPath(`${prefix}/foo/bar`), `/foo/bar`);

  t.equal(removePrefixFromPath(`${prefix}/ja`), `/ja`);
  t.equal(removePrefixFromPath(`${prefix}/ja/foo`), `/ja/foo`);
  t.equal(removePrefixFromPath(`${prefix}/ja/foo/bar`), `/ja/foo/bar`);
});

test("removeLanguageFromPath", t => {
  t.plan(6);
  const prefix = nextConfig.assetPrefix;

  t.equal(removeLanguageFromPath(`/`, 'en'), `/`);
  t.equal(removeLanguageFromPath(`/foo`, 'en'), `/foo`);
  t.equal(removeLanguageFromPath(`/foo/bar`, 'en'), `/foo/bar`);

  t.equal(removeLanguageFromPath(`/ja`, 'ja'), `/`);
  t.equal(removeLanguageFromPath(`/ja/foo`, 'ja'), `/foo`);
  t.equal(removeLanguageFromPath(`/ja/foo/bar`, 'ja'), `/foo/bar`);
});

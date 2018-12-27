'use strict';

const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const glob = require('glob').sync;
const marked = require('marked');

const linuxFiles = glob('linux/**/*.md');
const release = {
  date: new Date(),
  linux: [],
  android: [],
};

function parseMetaTag(text) {
  text = text.replace(/^\<!\-{2}/, '');
  text = text.replace(/\-{2}\/?\>\n?$/, '');
  return qs.parse(text);
}

glob('linux/**/*.md').forEach((pathname) => {
  const item = {
    category: path.dirname(pathname),
    imageUri: {
      upgrade: null,
      flush: null,
    },
    readme: null,
  };
  const filename = path.basename(pathname);
  const props = filename.split('-');
  item.version = props[0];
  item.datetime = props[1];

  const markdownSrc = fs.readFileSync(pathname, 'utf8');
  const tokens = marked.lexer(markdownSrc);
  tokens.forEach((token) => {
    if (token.type === 'html') {
      const tag = parseMetaTag(token.text);
      if (tag.upgrade_image_uri) {
        item.imageUri.upgrade = tag.upgrade_image_uri;
      }
      if (tag.flush_image_uri) {
        item.imageUri.flush = tag.flush_image_uri;
      }
    }
  });
  item.readme = markdownSrc;

  release.linux.push(item);
});

console.log(JSON.stringify(release, null, 2));

YODAOS Release
====================================
[![Build Status](https://travis-ci.org/yodaos-project/release.svg?branch=master)](https://travis-ci.org/yodaos-project/release)

It's used to publish YODAOS images, currently supports:

- [x] Kamino18
- [x] Amlogic A113
- [ ] Raspberry Pi

### Get Started

YODAOS Release defines the following roles, please read before starting.

#### What's a release

YODAOS Release is a markdown file, which includes the config and plain contents, for example:

```md
<!--flush_image_uri=https://foobar.loop/path/to/your/flush-img-->

本次更新：
- 增加了对多激活词的支持；
- 修复了播放器的内存泄漏问题；
```

As the following described before, in the comments, it contains:

- `flush_image_uri` is the image url to download.

The plain contents commonly are the markdown, it describes what's new, and something that you want to publish.

#### Committer

Every release is started from a [commiter](#committer), and it's the maintainer of an image, currently are:

- Kamino18: [@yorkie](https://github.com/yorkie)
- Amlogic A113: [@yorkie](https://github.com/yorkie)

#### Publisher

[Committer](#committer) submits a Pull Request on this repository, only [publisher](#publisher) could review
and publish.

#### How to submit

- Create a branch, then submit a markdown file, and by the following name-style `{version}-{date}-{buildId}.md`.
- In Markdown file, write your CHANGELOG.
- Create a Pull Request to master.

#### Online API

Check out the current YODAOS images list: https://yodaos-project.github.io/release/yodaos.json

### License

Apache 2.0

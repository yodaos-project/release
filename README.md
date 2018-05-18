Rokid Release
====================================
[![Build Status](https://travis-ci.org/Rokid/release.svg?branch=master)](https://travis-ci.org/Rokid/release)

Rokid 用于提供发布镜像的 GitHub 仓库，目前支持 Linux/Android 的官方镜像发布。

### 发布流程

1. 创建一个分支，并在对应目录下提交一个使用 Markdown 编写的文件，命名格式为`{version}-{date}-{buildId}.md`；
2. 在提交的文件中使用注释的方式，添加`upgrade_image_uri`和`flush_image_uri`的地址，并且添加关于镜像的更新说明；
3. 在一切准备就绪后，创建一个到 `master` 的 Pull Request；
4. 一旦 Pull Request 被合并到 `master` 后，CI(travis) 会做自动构建，并生成一个服务到 github pages；

> 除了 RokidOS 镜像外，我们将来也会支持更多的版本发布。

### 在线API

- 查看 RokidOS 镜像列表：https://rokid.github.io/release/rokidos.json

### Maintainer

- 亚妹 [@zhangyamei43](https://github.com/zhangyamei43)

### License

Rokid Copy Right.


---
layout: plugin

id: {{cookiecutter.plugin_identifier}}
title: {{cookiecutter.plugin_name}}
description: {{cookiecutter.plugin_description}}
author: {{cookiecutter.full_name}}
license: {{cookiecutter.plugin_license}}

# TODO
date: today's date in format YYYY-MM-DD, e.g. 2015-04-21

homepage: {% if cookiecutter.plugin_homepage %}{{cookiecutter.plugin_homepage}}{% else %}https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.repo_name}}{% endif %}
source: {% if cookiecutter.plugin_source %}{{cookiecutter.plugin_source}}{% else %}https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.repo_name}}{% endif %}
archive: {% if cookiecutter.plugin_installurl %}{{cookiecutter.installurl}}{% else %}https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.repo_name}}/archive/master.zip{% endif %}

# TODO
tags:
- a list
- of tags
- that apply
- to your plugin
- (take a look at the existing plugins for what makes sense here)

# TODO
screenshots:
- url: url of a screenshot
  alt: alt-text of a screenshot
  caption: caption of a screenshot
- url: url of another screenshot
  alt: alt-text of another screenshot
  caption: caption of another screenshot
- ...

# TODO
featuredimage: url of a featured image for your plugin

compatibility:
  # list of compatible versions, for example 1.2.0. If left empty no specific version requirement will be assumed
  octoprint:
  - 1.2.0

  # list of compatible operating systems, valid values are linux, windows, macos, leaving empty defaults to all
  os:
  - linux
  - windows
  - macos
---

**TODO**: Longer description of your plugin, configuration examples etc. This part will be visible on the page at
plugins.octoprint.org/plugin/{{cookiecutter.plugin_identifier}}/
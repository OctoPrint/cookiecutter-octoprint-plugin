# {{cookiecutter.plugin_name}}

**TODO:** Describe what your plugin does.

## Setup

Install the plugin like you would install any regular Python package from source:

    pip install {% if cookiecutter.plugin_installurl %}{{cookiecutter.installurl}}{% else %}https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.repo_name}}/archive/master.zip{% endif %}

Make sure you use the same Python environment that you installed OctoPrint under, otherwise the plugin won't be able to satisfy its dependencies.

Restart OctoPrint. octoprint.log should show you that the plugin was successfully found and loaded.

**TODO:** Describe how to install your plugin, if more needs to be done than just installing it via pip or through
the plugin manager.

## Configuration

**TODO:** Describe your plugin's configuration options (if any).
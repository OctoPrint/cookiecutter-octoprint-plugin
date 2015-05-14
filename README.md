# Cookiecutter Template for OctoPrint Plugins

This is a template for use with [Cookiecutter](https://github.com/audreyr/cookiecutter) to quickly create an OctoPrint 
plugin project folder out of thin air :)

![OctoPrint meets Cookiecutter](https://raw.githubusercontent.com/OctoPrint/cookiecutter-octoprint-plugin/master/assets/octoprint-cookiecutter.png)

## How to use

[Cookiecutter](https://github.com/audreyr/cookiecutter) depends on Python (just like OctoPrint). So first make sure
that is installed.

Then install Cookiecutter:

    pip install cookiecutter

You can then use Cookiecutter to create your new plugin's project folder (this example assumes we'll create it under 
`~/devel/` and still have our virtual env activated):

    cookiecutter gh:OctoPrint/cookiecutter-octoprint-plugin

Cookiecutter will take care of cloning this repository and ask you a couple of questions to properly turn the template
into your very own plugin project folder:

    Cloning into 'cookiecutter-octoprint-plugin'...
    remote: Counting objects: 25, done.
    remote: Compressing objects: 100% (15/15), done.
    remote: Total 25 (delta 0), reused 25 (delta 0), pack-reused 0
    Unpacking objects: 100% (25/25), done.
    Checking connectivity... done.
    repo_name (default is "OctoPrint-Skeleton")?
    full_name (default is "You")?
    email (default is "you@example.com")?
    github_username (default is "you")?
    plugin_name (default is "OctoPrint-Skeleton")?
    plugin_identifier (default is "skeleton")?
    plugin_version (default is "0.1")?
    plugin_description (default is "TODO")?
    plugin_homepage (default is "")?
    plugin_source (default is "")?
    plugin_installurl (default is "")?
    plugin_license (default is "AGPLv3")?

The template assumes the following default values if `plugin_homepage`, `plugin_source` and `plugin_installurl` are
left empty:

  * `plugin_homepage`: `https://github.com/<github_username>/<repo_name>`
  * `plugin_source`: `https://github.com/<github_username>/<repo_name>`
  * `plugin_source`: `https://github.com/<github_username>/<repo_name>/archive/master.zip`

It will also generate a pre filled (well, as far as possible...) data file under `<repo_name>/extra/<plugin_identifier>.md`
you can complete after your plugin is ready for prime time (adding a proper description, a bunch of screenshots and
a release date) to [publish your plugin on plugins.octoprint.org](http://plugins.octoprint.org/help/registering/).

# Cookiecutter Template for OctoPrint Plugins

This is a template for use with [Cookiecutter](https://github.com/audreyr/cookiecutter) to quickly create an 
[OctoPrint](https://github.com/foosel/OctoPrint) plugin project folder out of thin air :)

![OctoPrint meets Cookiecutter](https://raw.githubusercontent.com/OctoPrint/cookiecutter-octoprint-plugin/master/assets/octoprint-cookiecutter.png)

## How to use

[Cookiecutter](https://github.com/audreyr/cookiecutter) depends on Python (just like OctoPrint). So first make sure
that is installed.

Then install Cookiecutter:

    pip install cookiecutter

You can then use Cookiecutter to create your new plugin's project folder (this example assumes we'll create it under 
`~/devel/`):

    cookiecutter gh:OctoPrint/cookiecutter-octoprint-plugin

Cookiecutter will take care of cloning this repository and ask you a couple of questions to properly turn the template
into your very own plugin project folder:

    Cloning into 'cookiecutter-octoprint-plugin'...
    remote: Counting objects: 25, done.
    remote: Compressing objects: 100% (15/15), done.
    remote: Total 25 (delta 0), reused 25 (delta 0), pack-reused 0
    Unpacking objects: 100% (25/25), done.
    Checking connectivity... done.
    plugin_identifier (default is "skeleton")?
    plugin_name (default is "OctoPrint-Skeleton")?
    repo_name (default is "OctoPrint-Skeleton")?
    full_name (default is "You")?
    email (default is "you@example.com")?
    github_username (default is "you")?
    plugin_version (default is "0.1.0")?
    plugin_description (default is "TODO")?
    plugin_license (default is "AGPLv3")?
    plugin_homepage (default is "https://github.com/you/OctoPrint-Skeleton")?
    plugin_source (default is "https://github.com/you/OctoPrint-Skeleton")?
    plugin_installurl (default is "https://github.com/you/OctoPrint-Skeleton/archive/master.zip")?

----

**Note**: You can create a file `~/.cookiecutterrc` that cookiecutter will use to prefill things like `full_name`,
`email` and `github_username`:

``` yaml
default_context:
    full_name: "Your full name"
    email: "Your email address"
    github_username: "Your Github username"
```

That way you won't have to re-enter that information every time you create a new plugin.

----

The template will also generate a pre filled (well, as far as possible...) data file under `<repo_name>/extras/<plugin_identifier>.md`
you can complete after your plugin is ready for prime time (adding a proper description, a bunch of screenshots and
a release date) to [publish your plugin on plugins.octoprint.org](http://plugins.octoprint.org/help/registering/).

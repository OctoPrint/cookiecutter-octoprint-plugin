Your plugin's translations will reside here. The provided setup.py supports a
couple of additional commands to make managing your translations easier:

babel_extract
    Extracts any translateable messages (marked with Jinja's `_("...")` or
    JavaScript's `gettext("...")`) and creates the initial `messages.pot` file.
babel_refresh
    Reruns extraction and updates the `messages.pot` file.
babel_new --locale=<locale>
    Creates a new translation folder for locale `<locale>`.
babel_compile
    Compiles the translations into `mo` files, ready to be used within
    OctoPrint.

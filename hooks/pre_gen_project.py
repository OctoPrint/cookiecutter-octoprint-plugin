import re
import sys

# Dashes '-' are technically allowed, but require special import and would generate invalid code with this template
MODULE_REGEX = r"^[_a-zA-Z][_a-zA-Z0-9]+$"

# These names are used as class/module names in the template and therefore need to adhere to the given regex
names_to_check = [
    "{{ cookiecutter.plugin_identifier }}",
    "{{ cookiecutter.plugin_package }}",
]

for name in names_to_check:
    if not re.match(MODULE_REGEX, name):
        print(f"ERROR: '{name}' is not a valid Python module name!")
        print("Please only use a-z, A-Z, underscores and numbers (except for the first character)")
        sys.exit(1)

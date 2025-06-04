import re
import sys

from packaging.licenses import canonicalize_license_expression, InvalidLicenseExpression

#~~ Check for valid project name

NAME_REGEX = r"^([A-Z0-9]|[A-Z0-9][A-Z0-9._-]*[A-Z0-9])$"
plugin_name = "{{ cookiecutter.plugin_name }}"
if not re.match(NAME_REGEX, plugin_name, flags=re.IGNORECASE):
    print(f"ERROR: '{plugin_name}' is not a valid Python project name")
    print("Please only use a-z, A-Z, underscores, dashs, dots and numbers (except for the first character)")

#~~ Check for valid identifier and package names

MODULE_REGEX = r"^[_A-Z][_A-Z0-9]+$"
for name in [
    "{{ cookiecutter.plugin_identifier }}",
    "{{ cookiecutter.plugin_package }}",
]:
    if not re.match(MODULE_REGEX, name, flags=re.IGNORECASE):
        print(f"ERROR: '{name}' is not a valid Python module name!")
        print("Please only use a-z, A-Z, underscores and numbers (except for the first character)")
        sys.exit(1)

#~~ Check for valid SPDX license identifier

plugin_license = "{{ cookiecutter.plugin_license }}"
try:
    canonicalize_license_expression(plugin_license)
except InvalidLicenseExpression:
    print(f"ERROR: '{plugin_license}' is not a valid SPDX license expression!")
    print("Please refer to https://packaging.python.org/en/latest/specifications/license-expression/ for details on valid values")
    sys.exit(1)

/*
 * View model for {{ cookiecutter.plugin_name }}
 *
 * Author: {{cookiecutter.full_name}}
 * License: {{cookiecutter.plugin_license}}
 */
$(function() {
    function {{ cookiecutter.plugin_identifier | capitalize }}ViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: {{ cookiecutter.plugin_identifier | capitalize }}ViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */ ],
        // Elements to bind to, e.g. #settings_plugin_{{ cookiecutter.plugin_identifier }}, #tab_plugin_{{ cookiecutter.plugin_identifier }}, ...
        elements: [ /* ... */ ]
    });
});

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

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        {{ cookiecutter.plugin_identifier | capitalize }}ViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_{{ cookiecutter.plugin_identifier }}, #tab_plugin_{{ cookiecutter.plugin_identifier }}, ...
        [ /* ... */ ]
    ]);
});

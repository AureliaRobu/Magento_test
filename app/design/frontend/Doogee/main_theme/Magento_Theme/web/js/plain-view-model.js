define(["ko"], function (ko) {
    "use strict";
    return function (config) {
        return {
            title: "Hello World!",
            label: ko.observable("Currency info"),
            output: ko.computed(function () {
                return this.label() + ":";
            }),
        };
    };
});

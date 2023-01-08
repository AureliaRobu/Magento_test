define(["jquery", "accordion"], function ($) {
    "use strict";
    return function (accordion) {
        $.widget("mage/accordion", accordion, {});
    };
});

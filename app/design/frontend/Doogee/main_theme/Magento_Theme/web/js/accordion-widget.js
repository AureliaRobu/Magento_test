define(["jquery", "jquery-ui-modules/widget", "accordion"], function ($) {
    "use strict";
    $.widget("Magento_Theme.customAccordion", $.mage.accordion, {
        options: {
            breakpoint: 768,
        },
        _create: function () {
            this._super();
            this._handleMedia();
        },
        _handleMedia: function () {
            var $this = this;
            mediaCheck({
                media: `(max-width: ${this.options.breakpoint}px)`,
                entry: function () {
                    $this._callCollapsible();
                },
                exit: function () {
                    $this._callCollapsible();
                    $("[data-role='content']").removeAttr("style");
                    $this._destroy();
                },
            });
        },
    });
    return $.Magento_Theme.customAccordion;
});

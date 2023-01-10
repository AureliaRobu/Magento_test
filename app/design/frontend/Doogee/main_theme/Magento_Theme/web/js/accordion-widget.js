define(["jquery", "jquery-ui-modules/widget", "accordion"], function ($) {
    $.widget("Magento_Theme.customAccordion", $.mage.accordion, {
        options: {
            breakpoint: 768,
        },
        _create: function () {
            this._super();
            this._handleMedia();
        },
        _handleMedia: function () {
            $this = this;
            mediaCheck({
                media: `(max-width: ${this.options.breakpoint}px)`,
                entry: function () {
                    $this.options.openedState = "active";
                    $this.options.collapsible = true;
                    $this.options.active = false;
                },
                exit: function () {
                    $this.options.openedState = "active";
                    $this.options.collapsible = false;
                    $this.options.active = [0, 1, 2, 3];
                    $this.options.multipleCollapsible = false;

                    $("[data-role='content']").removeAttr("style");
                },
            });
        },
    });
});

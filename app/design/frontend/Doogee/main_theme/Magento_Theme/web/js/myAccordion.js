define(["jquery", "accordion", "matchMedia", "domReady!"], function ($) {
    "use strict";
    const $container = $("#footer-links");
    const $content = $("ul[data-role='content']");
    console.log($(this));
    mediaCheck({
        media: "(max-width: 768px)",
        entry: function () {
            console.log(this);
            $container.accordion({
                openedState: "active",
                collapsible: true,
                active: false,
            });
        },
        exit: function () {
            $container.accordion();
            $content.removeAttr("style");
            $container.accordion("destroy");
        },
    });
});

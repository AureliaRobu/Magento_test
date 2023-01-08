define(["jquery", "accordion", "matchMedia", "domReady!"], function ($) {
    "use strict";
    const $container = $("#footer-links");
    const $content = $("ul[data-role='content']");
    console.log($content);
    mediaCheck({
        media: "(max-width: 768px)",
        entry: function () {
            $container.accordion({
                openedState: "active",
                collapsible: true,
                active: false,
            });
        },
        exit: function () {
            $container.accordion({
                openedState: "active",
                collapsible: false,
                active: [0, 1, 2, 3],
                multipleCollapsible: false,
            });
            $content.removeAttr("style");
            $container.accordion("destroy");
        },
    });
});

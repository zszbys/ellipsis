(function ($) {
    $.fn.ellipsis = function () {
        return this.each(function () {
            var el = $(this);

            if (el.css("overflow") == "hidden") {
                var text = el.html();
                var t = $(this.cloneNode(true))//.attr("style", "position:absolute;overflow:visible;height:auto;max-height:10000px");
					//.hide()
					//.css('position', 'absolute')
					.css('overflow', 'visible')
					.height('auto')
                    .css('max-height', '10000px');
                //;

                el.after(t);

                function height() { return t.height() > el.height(); };
                //function width() { return t.width() > el.width(); };

                while (height()) {
                    text = text.substr(0, text.length - 4);
                    t.html(text + "...");
                }
                el.html(t.html());
                t.remove();
            }
        });
    };
})(jQuery);
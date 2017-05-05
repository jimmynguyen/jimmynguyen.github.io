(function(document, $) {

    var ELEMENTS = {
        NAME: {
            ID   : "#name",
            VALUE: "Richard Linares",
            LENGTH: 12
        },
        CURSOR: {
            ID    : "#cursor",
            VALUE : "<span id='cursor' class='color-green'>&#9611;</span>",
            LENGTH: 46 // length of VALUE - 6 (length of "&#9611;" - 1)
        }
    };

    var CONTENTS = {
        render: function(index, element, callback) {
            if (index < element.LENGTH) {
                setTimeout(function() {
                    var html = $(element.ID).html();
                    if (html.length === ELEMENTS.CURSOR.LENGTH) {
                        $(element.ID).html(element.VALUE.charAt(index++) + ELEMENTS.CURSOR.VALUE);
                    } else {
                        $(element.ID).html(html.substring(0, html.length-ELEMENTS.CURSOR.LENGTH) + element.VALUE.charAt(index++) + ELEMENTS.CURSOR.VALUE);
                    }
                    CONTENTS.render(index, element, callback);
                }, 100);
            } else {
                callback();
            }
        }
    };

    $(document).ready(function() {
        // render name
        CONTENTS.render(0, ELEMENTS.NAME, function() {
            setInterval(function() {
                if ($(ELEMENTS.CURSOR.ID).hasClass("color-green")) {
                    $(ELEMENTS.CURSOR.ID).removeClass("color-green");
                    $(ELEMENTS.CURSOR.ID).addClass("color-black");
                } else {
                    $(ELEMENTS.CURSOR.ID).removeClass("color-black");
                    $(ELEMENTS.CURSOR.ID).addClass("color-green");
                }
            }, 500);
        });
    });

})(document, jQuery);

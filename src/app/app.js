(function(document, $) {

    var ELEMENTS = {
        NAME: {
            ID   : "#name",
            VALUE: "Jimmy Nguyen"
        },
        EDUCATION: {
            ID   : "#education",
            VALUE: "Education"
        },
        SCHOOL_NAME: {
            ID   : "#schoolName",
            VALUE: "Georgia Institute of Technology"
        },
        SCHOOL_LOCATION: {
            ID   : "#schoolLocation",
            VALUE: "Atlanta, GA"
        },
        SCHOOL_DEGREE_1: {
            ID   : "#schoolDegree1",
            VALUE: "B.S. in Biomedical Engineering"
        },
        SCHOOL_TIME_RANGE_1: {
            ID   : "#schoolTimeRange1",
            VALUE: "AUG 2012 - MAY 2017"
        },
        SCHOOL_DEGREE_2: {
            ID   : "#schoolDegree2",
            VALUE: "B.S. in Computer Science"
        },
        SCHOOL_TIME_RANGE_2: {
            ID   : "#schoolTimeRange2",
            VALUE: "AUG 2012 - DEC 2017"
        },
        SKILLS: {
            ID   : "#skills",
            VALUE: "Skills"
        }
    };

    var CURSOR = {
        ID         : "#cursor",
        VALUE      : "<span id='cursor' class='color-green'>&#9611;</span>",
        LENGTH     : 46, // length of VALUE - 6 (length of "&#9611;" - 1)
        FLASH_SPEED: 500 // milliseconds
    };

    var TERMINAL = {
        ID   : "#terminal",
        VALUE: "$ ",
        IS_RENDERED: false
    };

    var CONTENTS = {
        RENDER_SPEED: 25, // milliseconds
        STACK: [],
        render: function(index, element) {
            if (index < element.VALUE.length) {
                setTimeout(function() {
                    var html = $(element.ID).html();
                    if (html.length === CURSOR.LENGTH) {
                        $(element.ID).html(element.VALUE.charAt(index++) + CURSOR.VALUE);
                    } else {
                        $(element.ID).html(html.substring(0, html.length-CURSOR.LENGTH) + element.VALUE.charAt(index++) + CURSOR.VALUE);
                    }
                    CONTENTS.render(index, element);
                }, CONTENTS.RENDER_SPEED);
            } else {
                // continue rendering if there are still elements on the stack
                if (CONTENTS.STACK.length > 0) {
                    $(CURSOR.ID).remove();
                    CONTENTS.render(0, ELEMENTS[CONTENTS.STACK.shift()]);
                } else {
                    if (!TERMINAL.IS_RENDERED) {
                        TERMINAL.IS_RENDERED = true;
                        $(CURSOR.ID).remove();
                        CONTENTS.render(0, TERMINAL);
                        CONTENTS.flash_cursor();
                    }
                }
            }
        },
        flash_cursor: function() {
            setInterval(function() {
                if ($(CURSOR.ID).hasClass("color-green")) {
                    $(CURSOR.ID).removeClass("color-green");
                    $(CURSOR.ID).addClass("color-black");
                } else {
                    $(CURSOR.ID).removeClass("color-black");
                    $(CURSOR.ID).addClass("color-green");
                }
            }, CURSOR.FLASH_SPEED);
        }
    };

    $(document).ready(function() {
        // test
        $.getJSON("sections/1.json", function(json) {
            console.log(json); // this will show the info it in firebug console
        });

        // initialize terminal
        document.onkeydown = function(e) {
            e = e || window.event;
            if (CONTENTS.STACK.length <= 0) {
                if (!e.ctrlKey && e.keyCode == 8) {
                    $(CURSOR.ID).remove();
                    var value = $(TERMINAL.ID).html();
                    if (value.length > 2) {
                        value = value.substring(0, value.length - 1);
                    }
                    $(TERMINAL.ID).html(value + CURSOR.VALUE);
                } else if (!e.ctrlKey && ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90))) {
                    $(CURSOR.ID).remove();
                    $(TERMINAL.ID).html($(TERMINAL.ID).html() + e.key + CURSOR.VALUE);
                } else {
                    console.log(e);
                }
            }
        }
        // push elements to render onto stack
        CONTENTS.STACK = Object.keys(ELEMENTS);
        // render elements
        CONTENTS.render(0, ELEMENTS[CONTENTS.STACK.shift()]);
    });

})(document, jQuery);

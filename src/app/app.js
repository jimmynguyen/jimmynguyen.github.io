(function(document, $) {

    var ELEMENTS = {
        section1name1: {
            ID   : "#section1name1",
            VALUE: "Jimmy Nguyen"
        },
        section2education1: {
            ID   : "#section2education1",
            VALUE: "Education"
        },
        section2education2: {
            ID   : "#section2education2",
            VALUE: "Georgia Institute of Technology"
        },
        section2education3: {
            ID   : "#section2education3",
            VALUE: "Atlanta, GA"
        },
        section2education4: {
            ID   : "#section2education4",
            VALUE: "> B.S. in Biomedical Engineering"
        },
        section2education5: {
            ID   : "#section2education5",
            VALUE: "AUG 2012 -  MAY 2017"
        },
        section2education6: {
            ID   : "#section2education6",
            VALUE: "> B.S. in Computer Science"
        },
        section2education7: {
            ID   : "#section2education7",
            VALUE: "AUG 2012 -  DEC 2017"
        },
        section3skills1: {
            ID   : "#section3skills1",
            VALUE: "Software Skills"
        },
        section3skills2: {
            ID   : "#section3skills2",
            VALUE: "Good Level"
        },
        section3skills3: {
            ID   : "#section3skills3",
            VALUE: "> AngularJS"
        },
        section3skills4: {
            ID   : "#section3skills4",
            VALUE: "> ASP.NET"
        },
        section3skills5: {
            ID   : "#section3skills5",
            VALUE: "> Bootstrap"
        },
        section3skills6: {
            ID   : "#section3skills6",
            VALUE: "> C#"
        },
        section3skills7: {
            ID   : "#section3skills7",
            VALUE: "> CSS"
        },
        section3skills8: {
            ID   : "#section3skills8",
            VALUE: "> Git"
        },
        section3skills9: {
            ID   : "#section3skills9",
            VALUE: "> JQuery"
        },
        section3skills10: {
            ID   : "#section3skills10",
            VALUE: "> HTML"
        },
        section3skills11: {
            ID   : "#section3skills11",
            VALUE: "> JavaScript"
        },
        section3skills12: {
            ID   : "#section3skills12",
            VALUE: "> MATLAB"
        },
        section3skills13: {
            ID   : "#section3skills13",
            VALUE: "> NodeJS"
        },
        section3skills14: {
            ID   : "#section3skills14",
            VALUE: "> NPM"
        },
        section3skills15: {
            ID   : "#section3skills15",
            VALUE: "> MySQL"
        },
        section3skills16: {
            ID   : "#section3skills16",
            VALUE: "> SQL Server Management Studio"
        },
        section3skills17: {
            ID   : "#section3skills17",
            VALUE: "> T-SQL"
        },
        section3skills18: {
            ID   : "#section3skills18",
            VALUE: "> Visual Studio"
        },
        section3skills19: {
            ID   : "#section3skills19",
            VALUE: "Intermediate Level"
        },
        section3skills20: {
            ID   : "#section3skills20",
            VALUE: "> FileMaker"
        },
        section3skills21: {
            ID   : "#section3skills21",
            VALUE: "> Java"
        },
        section3skills22: {
            ID   : "#section3skills22",
            VALUE: "> LaTeX"
        },
        section3skills23: {
            ID   : "#section3skills23",
            VALUE: "> Markdown"
        },
        section3skills24: {
            ID   : "#section3skills24",
            VALUE: "> PHP"
        },
        section3skills25: {
            ID   : "#section3skills25",
            VALUE: "> PHP"
        },
        section3skills26: {
            ID   : "#section3skills26",
            VALUE: "> SharePoint"
        },
        section3skills27: {
            ID   : "#section3skills27",
            VALUE: "> shell"
        },
        section3skills28: {
            ID   : "#section3skills28",
            VALUE: "> VBA"
        },
        section3skills29: {
            ID   : "#section3skills29",
            VALUE: "Basic Level"
        },
        section3skills30: {
            ID   : "#section3skills30",
            VALUE: "> C"
        },
        section3skills31: {
            ID   : "#section3skills31",
            VALUE: "> C++"
        },
        section3skills32: {
            ID   : "#section3skills32",
            VALUE: "> Python"
        },
        section3skills33: {
            ID   : "#section3skills33",
            VALUE: "> Firebase"
        },
        section3skills34: {
            ID   : "#section3skills34",
            VALUE: "> LabVIEW"
        },
        section3skills35: {
            ID   : "#section3skills35",
            VALUE: "> SolidWorks"
        },
        section3skills36: {
            ID   : "#section3skills36",
            VALUE: "> Vim"
        },
        section3skills37: {
            ID   : "#section3skills37",
            VALUE: "> WordPress"
        },
        section4experience1: {
            ID   : "#section4experience1",
            VALUE: "Experience"
        },
        section4experience2: {
            ID   : "#section4experience2",
            VALUE: "WellStar Health System Inc"
        },
        section4experience3: {
            ID   : "#section4experience3",
            VALUE: "Atlanta, GA"
        },
        section4experience4: {
            ID   : "#section4experience4",
            VALUE: "[IT Student Intern]"
        },
        section4experience5: {
            ID   : "#section4experience5",
            VALUE: "AUG 2016 - MAY 2017"
        },
        section4experience6: {
            ID   : "#section4experience6",
            VALUE: "> Designed, developed, and tested web applications."
        },
        section4experience7: {
            ID   : "#section4experience7",
            VALUE: "> Researched and analyzed operational IT requests and needs."
        },
        section4experience8: {
            ID   : "#section4experience8",
            VALUE: "> Responded to user requests for service."
        },
        section4experience9: {
            ID   : "#section4experience9",
            VALUE: "> Troubleshooted reported problems."
        },
        section4experience10: {
            ID   : "#section4experience10",
            VALUE: "> Assisted with project management tasks."
        },
        section4experience11: {
            ID   : "#section4experience11",
            VALUE: "Institute of Nuclear Power Operations"
        },
        section4experience12: {
            ID   : "#section4experience12",
            VALUE: "Atlanta, GA"
        },
        section4experience13: {
            ID   : "#section4experience13",
            VALUE: "[Software Developer Co-op]"
        },
        section4experience14: {
            ID   : "#section4experience14",
            VALUE: "JAN 2015 - MAY 2017"
        },
        section4experience15: {
            ID   : "#section4experience15",
            VALUE: "> Developed Windows client and web-based software using .NET Framework, Visual Studio, and Team Foundation Server."
        },
        section4experience16: {
            ID   : "#section4experience16",
            VALUE: "> Enhanced and maintained existing ASP applications."
        },
        section4experience17: {
            ID   : "#section4experience17",
            VALUE: "> Programmed SQL data retrieval language from Microsoft SQL Server databases."
        },
        section4experience18: {
            ID   : "#section4experience18",
            VALUE: "Pathology Dynamics Lab, Georgia Tech"
        },
        section4experience19: {
            ID   : "#section4experience19",
            VALUE: "Atlanta, GA"
        },
        section4experience20: {
            ID   : "#section4experience20",
            VALUE: "[Research Assistant]"
        },
        section4experience21: {
            ID   : "#section4experience21",
            VALUE: "MAY 2013 - MAY 2017"
        },
        section4experience22: {
            ID   : "#section4experience22",
            VALUE: "> Maintained and enhanced FileMaker database."
        },
        section4experience23: {
            ID   : "#section4experience23",
            VALUE: "> Wrote scripts to automate quality control protocols."
        },
        section4experience24: {
            ID   : "#section4experience24",
            VALUE: "> Developed an online data quantification competency testing system."
        },
        section4experience25: {
            ID   : "#section4experience25",
            VALUE: "> Developed a web application to manage quality control feedback."
        },
        section4experience26: {
            ID   : "#section4experience26",
            VALUE: "> Built and maintained lab computers."
        },
        section4experience27: {
            ID   : "#section4experience27",
            VALUE: "> Managed a team of quality control managers."
        },
        section4experience28: {
            ID   : "#section4experience28",
            VALUE: "College of Computing, Georgia Tech"
        },
        section4experience29: {
            ID   : "#section4experience29",
            VALUE: "Atlanta, GA"
        },
        section4experience30: {
            ID   : "#section4experience30",
            VALUE: "[Teaching Assistant]"
        },
        section4experience31: {
            ID   : "#section4experience31",
            VALUE: "AUG 2013 - MAY 2016"
        },
        section4experience32: {
            ID   : "#section4experience32",
            VALUE: "> Taught a weekly recitation, graded assignments, proctored exams."
        },
        section4experience33: {
            ID   : "#section4experience33",
            VALUE: "> Developed an online question bank and a homework autograder."
        },
        section4experience34: {
            ID   : "#section4experience34",
            VALUE: "School of Mathematics, Georgia Tech"
        },
        section4experience35: {
            ID   : "#section4experience35",
            VALUE: "Atlanta, GA"
        },
        section4experience36: {
            ID   : "#section4experience36",
            VALUE: "[Lecture Assistant]"
        },
        section4experience37: {
            ID   : "#section4experience37",
            VALUE: "JAN 2016 - MAY 2016"
        },
        section4experience38: {
            ID   : "#section4experience38",
            VALUE: "> Assisted with one lecture class a week and helped facilitate active learning."
        },
        section4experience39: {
            ID   : "#section4experience39",
            VALUE: "> Held 2-3 hours per week of office hours and/or review sessions."
        },
        section4experience40: {
            ID   : "#section4experience40",
            VALUE: "> Graded homework and tests and responded to student emails."
        },
        section4experience41: {
            ID   : "#section4experience41",
            VALUE: "> Attended organizational meetings with the lead instructor."
        },
        section4experience42: {
            ID   : "#section4experience42",
            VALUE: "Laboratory of Lymphatic Biology and Bioengineering, Georgia Tech"
        },
        section4experience43: {
            ID   : "#section4experience43",
            VALUE: "Atlanta, GA"
        },
        section4experience44: {
            ID   : "#section4experience44",
            VALUE: "[Research Assistant]"
        },
        section4experience45: {
            ID   : "#section4experience45",
            VALUE: "JAN 2016 - MAY 2016"
        },
        section4experience46: {
            ID   : "#section4experience46",
            VALUE: "> Worked on a team of five to develop an early-stage diagnostic tool for lymphedema in MATLAB using the Xbox Kinect."
        },
        section4experience47: {
            ID   : "#section4experience47",
            VALUE: "Georgia Tech Ripple Effect"
        },
        section4experience48: {
            ID   : "#section4experience48",
            VALUE: "Atlanta, GA"
        },
        section4experience49: {
            ID   : "#section4experience49",
            VALUE: "[Webmaster]"
        },
        section4experience50: {
            ID   : "#section4experience50",
            VALUE: "JAN 2015 - MAY 2016"
        },
        section4experience51: {
            ID   : "#section4experience51",
            VALUE: "> Maintained web content using WordPress."
        },
        section4experience52: {
            ID   : "#section4experience52",
            VALUE: "Kim & Associates"
        },
        section4experience53: {
            ID   : "#section4experience53",
            VALUE: "Atlanta, GA"
        },
        section4experience54: {
            ID   : "#section4experience54",
            VALUE: "[Intern]"
        },
        section4experience55: {
            ID   : "#section4experience55",
            VALUE: "AUG 2015 - NOV 2015"
        },
        section4experience56: {
            ID   : "#section4experience56",
            VALUE: "> Analyzed financial data and generated a report of findings."
        },
        section4experience57: {
            ID   : "#section4experience57",
            VALUE: "> Maintained websites using WordPress."
        },
        section4experience58: {
            ID   : "#section4experience58",
            VALUE: "Department of Biomedical Engineering, Georgia Tech"
        },
        section4experience59: {
            ID   : "#section4experience59",
            VALUE: "Atlanta, GA"
        },
        section4experience60: {
            ID   : "#section4experience60",
            VALUE: "[Biotechnology Career Fair Webmaster]"
        },
        section4experience61: {
            ID   : "#section4experience61",
            VALUE: "MAY 2015 - SEP 2015"
        },
        section4experience62: {
            ID   : "#section4experience62",
            VALUE: "> Maintained and enhanced Biotechnology Career Fair website."
        },
        section4experience63: {
            ID   : "#section4experience63",
            VALUE: "Intradiem"
        },
        section4experience64: {
            ID   : "#section4experience64",
            VALUE: "Alpharetta, GA"
        },
        section4experience65: {
            ID   : "#section4experience65",
            VALUE: "[Software Engineering Intern]"
        },
        section4experience66: {
            ID   : "#section4experience66",
            VALUE: "MAY 2015 - AUG 2015"
        },
        section4experience67: {
            ID   : "#section4experience67",
            VALUE: "> Updated code base to Visual Studio 2013 and .NET Framework 4.5.2."
        },
        section4experience68: {
            ID   : "#section4experience68",
            VALUE: "> Implemented session management features"
        },
        section4experience69: {
            ID   : "#section4experience69",
            VALUE: "> Maintained different versions of the product using .NET Framework, Visual Studio, and Team Foundation Server."
        },
        section4experience70: {
            ID   : "#section4experience70",
            VALUE: "> Created an automated build for Visual Studio solutions using TeamCity."
        },
        section4experience71: {
            ID   : "#section4experience71",
            VALUE: "ClearDate"
        },
        section4experience72: {
            ID   : "#section4experience72",
            VALUE: "Atlanta, GA"
        },
        section4experience73: {
            ID   : "#section4experience73",
            VALUE: "[Web Developer]"
        },
        section4experience74: {
            ID   : "#section4experience74",
            VALUE: "JAN 2015 - AUG 2015"
        },
        section4experience75: {
            ID   : "#section4experience75",
            VALUE: "> Developed website using the PHP CodeIgniter Framework."
        },
        section4experience76: {
            ID   : "#section4experience76",
            VALUE: "Yerkes National Primate Research Center"
        },
        section4experience77: {
            ID   : "#section4experience77",
            VALUE: "Atlanta, GA"
        },
        section4experience78: {
            ID   : "#section4experience78",
            VALUE: "[Intern]"
        },
        section4experience79: {
            ID   : "#section4experience79",
            VALUE: "OCT 2014 - DEC 2014"
        },
        section4experience80: {
            ID   : "#section4experience80",
            VALUE: "> Wrote PHP scripts to import and export data via MySQL."
        },
        section4experience81: {
            ID   : "#section4experience81",
            VALUE: "School of Mathematics, Georgia Tech"
        },
        section4experience82: {
            ID   : "#section4experience82",
            VALUE: "Atlanta, GA"
        },
        section4experience83: {
            ID   : "#section4experience83",
            VALUE: "[Teaching Assistant]"
        },
        section4experience84: {
            ID   : "#section4experience84",
            VALUE: "AUG 2014 - DEC 2014"
        },
        section4experience85: {
            ID   : "#section4experience85",
            VALUE: "> Taught two recitation sessions each week."
        },
        section4experience86: {
            ID   : "#section4experience86",
            VALUE: "> Graded homework assignments and exams."
        },
        section4experience87: {
            ID   : "#section4experience87",
            VALUE: "> Attended organizational meetings with lead instructor."
        },
        section4experience88: {
            ID   : "#section4experience88",
            VALUE: "Department of Housing, Georgia Tech"
        },
        section4experience89: {
            ID   : "#section4experience89",
            VALUE: "Atlanta, GA"
        },
        section4experience90: {
            ID   : "#section4experience90",
            VALUE: "[Learning Assistant Program Tutor]"
        },
        section4experience91: {
            ID   : "#section4experience91",
            VALUE: "JAN 2014 - DEC 2014"
        },
        section4experience92: {
            ID   : "#section4experience92",
            VALUE: "> Tutored students in Chemistry, Physics, Calculus, and Computer Science."
        },
        section4experience93: {
            ID   : "#section4experience93",
            VALUE: "Tissue Mechanics Lab, Georgia Tech"
        },
        section4experience94: {
            ID   : "#section4experience94",
            VALUE: "Atlanta, GA"
        },
        section4experience95: {
            ID   : "#section4experience95",
            VALUE: "[Research Assistant]"
        },
        section4experience96: {
            ID   : "#section4experience96",
            VALUE: "MAY 2014 - JUL 2014"
        },
        section4experience97: {
            ID   : "#section4experience97",
            VALUE: "> Generated 3D models of the aortic root on HyperMesh."
        },
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
        RENDER_SPEED: 1, // milliseconds
        STACK: [],
        render: function(index, element) {
            if (index < element.VALUE.length) {
                setTimeout(function() {
                    var html = $(element.ID).html() ? $(element.ID).html() : "";
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

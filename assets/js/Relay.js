"use strict";
let relayNameSpace = function () {
    // PAGE VARS
    var currentBtn = null;
    var currentCard = null;
    var optimQ2Card = null;
    var pdf = null;

    $(document).ready(function () {
        $('select').formSelect();
        $('.tooltipped').tooltip();
        $('.modal').modal();
        $('textarea').characterCounter();
        $('.tabs').tabs();
        $('.fixed-action-btn').floatingActionButton();
        $('.parallax').parallax();

        
    });
    
    // ----------------------------------------------- BUTTON SOURCES -----------------------------------------------
    var btnInfo = {
        "#train_b": {
            isOn: false,
            on: "assets/site-img/Train - Pressed.png",
            off: "assets/site-img/Train - Idle.png",
            logo: "assets/site-img/Train- Main Logo.png",
            title: "assets/site-img/Train - Title.png",
            header: "assets/site-img/Experts (T).png",
            colour: "#00B0C0"
        },
        "#build_b": {
            isOn: false,
            on: "assets/site-img/Build - Pressed.png",
            off: "assets/site-img/Build - Idle.png",
            logo: "assets/site-img/Build- Main Logo.png",
            title: "assets/site-img/Build - Title.png",
            header: "assets/site-img/Experts (B).png",
            colour: "#E29032"
        },
        "#assess_b": {
            isOn: false,
            on: "assets/site-img/Assess - Pressed.png",
            off: "assets/site-img/Assess - Idle.png",
            logo: "assets/site-img/Assess- Main Logo.png",
            title: "assets/site-img/Assess - Title.png",
            header: "assets/site-img/Experts (A).png",
            colour: "#A3CF6E"
        },
        "#optimize_b": {
            isOn: false,
            on: "assets/site-img/Optimize - Pressed.png",
            off: "assets/site-img/Optimize - Idle.png",
            logo: "assets/site-img/Optimize- Main Logo.png",
            title: "assets/site-img/Optimize - Title.png",
            header: "assets/site-img/Experts (O).png",
            colour: "#916892"
        }
    };


    // ----------------------------------------------- MAIN 4 BUTTONS HOVER FUNCTIONS -----------------------------------------------
    $("#train_b").hover(function () {
        if (!(btnInfo["#train_b"].isOn)) {
            $("#train_b").attr("src", btnInfo["#train_b"].on);
        }
    }, function () {
        if (!(btnInfo["#train_b"].isOn)) {
            $("#train_b").attr("src", btnInfo["#train_b"].off);
        }
    });

    $("#build_b").hover(function () {
        if (!(btnInfo["#build_b"].isOn)) {
            $("#build_b").attr("src", btnInfo["#build_b"].on);
        }
    }, function () {
        if (!(btnInfo["#build_b"].isOn)) {
            $("#build_b").attr("src", btnInfo["#build_b"].off);
        }
    });

    $("#assess_b").hover(function () {
        if (!(btnInfo["#assess_b"].isOn)) {
            $("#assess_b").attr("src", btnInfo["#assess_b"].on);
        }
    }, function () {
        if (!(btnInfo["#assess_b"].isOn)) {
            $("#assess_b").attr("src", btnInfo["#assess_b"].off);
        }
    });

    $("#optimize_b").hover(function () {
        if (!(btnInfo["#optimize_b"].isOn)) {
            $("#optimize_b").attr("src", btnInfo["#optimize_b"].on);
        }
    }, function () {
        if (!(btnInfo["#optimize_b"].isOn)) {
            $("#optimize_b").attr("src", btnInfo["#optimize_b"].off);
        }
    });

    // ----------------------------------------------- FUNCTIONS -----------------------------------------------
    function sectionChange(b_id, c_id, withScroll) {
        if(b_id != currentBtn && c_id != currentCard) {
            //toggle off
            if (currentBtn) {
                toggleButtonSelected(currentBtn);
            }
            if (currentCard) {
                toggleCardSelected(currentCard);
                resetForm(currentCard);
            }
            
            // toggle on
            if(withScroll) {
                toggleCardSelected(c_id, withScroll);
            } else {
                toggleCardSelected(c_id);
            }            
            toggleButtonSelected(b_id);    
            currentBtn = b_id;
            currentCard = c_id;
        }
    }

    function toggleButtonSelected(id) {
        if (btnInfo[id].isOn) {
            $(id).attr("src", btnInfo[id].off);
            btnInfo[id].isOn = false;
        } else {
            $(id).attr("src", btnInfo[id].on);
            btnInfo[id].isOn = true;
            $("#c_logo").attr("src", btnInfo[id].logo);
            $("#c_title").attr("src", btnInfo[id].title);
            $("#c_header").attr("src", btnInfo[id].header);
            if (btnInfo[id].colour) {
                colourThemeChange(btnInfo[id].colour); 
            }
        }
    }

    function colourThemeChange(colour) {
        $("#main_section").css("background", "linear-gradient(white, " + colour + ")");
        $(".btn-large").css("background-color", colour);
        $(".dropdown-content>li>span").css("color", colour);
        $(".dropdown-content>li>span>label").css("color", colour);
        $(".switch>label>span").css("background-color", colour);
        $(".btn-floating").css("background-color", colour);
        $(".indicator").css("background-color", colour);
    }

    function toggleCardSelected(id, withScroll) {
        if ($(id).is(':visible')) {
            $(id).fadeOut(10);
        } else {           
            $(id).fadeIn(100);
            $('.tabs').tabs(); 
            if(withScroll != undefined) {
                scrollTo(id);
            } else {
                $('html, body').scrollTop( $(document).height() );
            }            
        }
    }

    function scrollTo(id) {
        if (id == "top") {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        } else {
            $("html, body").animate({
                scrollTop: $(id).offset().top
            }, 1000);
        }
    }

    function resetForm(id) {
        $(id).trigger("reset");
        $(".helper-text").remove();
    }

    function optimOptionsCheck(element) {
        if (optimQ2Card) {
            $(optimQ2Card).addClass("c_hide");
        }
        if (element.value == 1) {
            $("#optim_q3_o1").removeClass("c_hide");
            optimQ2Card = "#optim_q3_o1";
        } else if (element.value == 2) {
            $("#optim_q3_o2").removeClass("c_hide");
            optimQ2Card = "#optim_q3_o2";
        }
    }

    function otherToggle(option, card) {
        if ($(option).is(":checked")) {
            $(card).removeClass("c_hide");
        } else {
            $(card).addClass("c_hide");
        }
    }

    function resetPage() {
        if ($("#modal_submit").is(":disabled")) {
            location.reload();
        } else {
            $('#submit_modal').modal('close');
        }
    }

    function aboutRedirect() {
        // similar behavior as an HTTP redirect
        window.location.replace("../Relay/about");
    }

    function homeRedirect() {
    // similar behavior as an HTTP redirect
        window.location.replace("../Relay/");
    }

    function createPdf() {
        let source;
        if (currentCard) {
            if (currentCard == "#train_card") {
                trainPdfSetup();
                source = $('#train_pdf')[0];
            } else if (currentCard == "#build_card") {
                buildPdfSetup();
                source = $('#build_pdf')[0];
            } else if (currentCard == "#assess_card") {
                assesPdfSetup();
                source = $('#assess_pdf')[0];
            } else if (currentCard == "#optim_card") {
                optimizePdfSetup();
                source = $('#optimize_pdf')[0];
            }
        }

        pdf = new jsPDF('p', 'pt', 'letter');
        let specialElementHandlers = {
            '#bypassme': function (element, renderer) {
                return true
            }
        };

        let margins = {
            top: 20,
            bottom: 60,
            left: 40,
            width: 522
        };

        pdf.fromHTML(
            source, // HTML string or DOM elem ref.
            margins.left, // x coord
            margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },
            function (dispose) {
                sendEmail();
            }, margins
        );
    }

    function sendEmail() {
        $("#submit_modal_form").addClass("c_hide");
        $("#submit_modal_spn").removeClass("c_hide");
        $("#modal_submit").attr("disabled", "disabled");
        $("#modal_close").attr("disabled", "disabled");

        Email.send({
            SecureToken: "bfa28959-e0b8-4a29-a78f-f3c281fa4249",
            To: "edsquared.email@gmail.com",
            From: "postmaster@sandboxdd1ae4e941f9495ebf87c21372edf9c0.mailgun.org",
            Subject: "Relay Academy Submission",
            Body: "This is an auto generated email. Please see attachment for website submission.",
            Attachments: [{
                name: "Relay Academy Submission.pdf",
                data: pdf.output('datauristring')
            }]
        }).then(function (message) {
            console.log(message);
            $("#submit_modal_spn").addClass("c_hide");
            $("#submit_modal_done").removeClass("c_hide");
            $("#modal_close").removeAttr("disabled");
        });
    }

    function trainPdfSetup() {
        // name
        $("#train_name").html($("#user_name").val());
        // email
        $("#train_email").html($("#email_input").val());
        // question 1
        $("#train_a1").html($("#train_q1").val());
        // question 2
        if ($("#train_q2").val() == "1") {
            $("#train_a2").html("[T1]");
        } else if ($("#train_q2").val() == "2") {
            $("#train_a2").html("[T2]");
        }
        // question 3
        if ($("#train_q3").val() === ("1")) {
            $("#train_a3").html("Beginner");
        } else if ($("#train_q3").val() === ("2")) {
            $("#train_a3").html("Intermediate");
        } else if ($("#train_q3").val() === ("3")) {
            $("#train_a3").html("Proficient");
        } else if ($("#train_q3").val() === ("4")) {
            $("#train_a3").html("I need training on one or more specific Salesforce Marketing Cloud products.");
        }
        // question 4
        let train_a4 = "";
        if ($("#train_q4").val().includes("1"))
            train_a4 += "Email Studio, ";
        if ($("#train_q4").val().includes("2"))
            train_a4 += "Journey Builder, ";
        if ($("#train_q4").val().includes("3"))
            train_a4 += "Audience Studio, ";
        if ($("#train_q4").val().includes("4"))
            train_a4 += "Advertising Studio, ";
        if ($("#train_q4").val().includes("5"))
            train_a4 += "Mobile Studio, ";
        if ($("#train_q4").val().includes("6"))
            train_a4 += "Social Studio, ";
        if ($("#train_q4").val().includes("7"))
            train_a4 += "Interaction Studio, ";
        if ($("#train_q4").val().includes("8"))
            train_a4 += "Data Studio, ";
        if ($("#train_q4").val().includes("0"))
            train_a4 += "Other";
        $("#train_a4").html(train_a4);
        // question 4 other
        if ($("#train_other_ta").val()) {
            $("#train_a5").html($("#train_other_ta").val());
        } else {
            $("#train_a5").html("N/A");
        }
        // question 5
        if ($("#train_q5").prop('checked') == true) {
            $("#train_a6").html("Yes");
        } else {
            $("#train_a6").html("No");
        }
    }

    function buildPdfSetup() {
        // name
        $("#build_name").html($("#user_name").val());
        // email
        $("#build_email").html($("#email_input").val());
        // question 1
        $("#build_a1").html($("#build_q1").val());
        // question 2
        if ($("#build_q2").val() === ("1")) {
            $("#build_a2").html("Platform & Instance Implementation [B1]");
        } else if ($("#build_q2").val() === ("2")) {
            $("#build_a2").html("Development [B2]");
        } else if ($("#build_q2").val() === ("3")) {
            $("#build_a2").html("Campaign Management [B3]");
        } else if ($("#build_q2").val() === ("4")) {
            $("#build_a2").html("Reporting [B4]");
        }
        // question 2 [B1]    
        if ($("#build_q2").val() === ("1")) {
            if ($("#build_q3_b1a").prop('checked') == true) {
                $("#build_a2_b1a").html("Yes");
            } else {
                $("#build_a2_b1a").html("No");
            }
            if ($("#build_q3_b1b").prop('checked') == true) {
                $("#build_a2_b1b").html("Yes");
            } else {
                $("#build_a2_b1b").html("No");
            }
            if ($("#build_q3_b1c").prop('checked') == true) {
                $("#build_a2_b1c").html("Yes");
            } else {
                $("#build_a2_b1c").html("No");
            }
        } else {
            $("#build_op_b1").attr("id", "bypassme");
        }
        // question 2 [B2]
        if ($("#build_q2").val() === ("2")) {
            // do somthing
        } else {
            $("#build_op_b2").attr("id", "bypassme");
        }
        // question 2 [B3]
        if ($("#build_q2").val() === ("3")) {
            // do somthing
        } else {
            $("#build_op_b3").attr("id", "bypassme");
        }
        // question 2 [B4]
        if ($("#build_q2").val() === ("4")) {
            // do somthing
        } else {
            $("#build_op_b4").attr("id", "bypassme");
        }
        // question 3
        if ($("#build_q3").prop('checked') == true) {
            $("#build_a3").html("Yes");
        } else {
            $("#build_a3").html("No");
        }
        // question 4
        let build_a4 = "";
        if ($("#build_q4").val().includes("1"))
            build_a4 += "Abandoned Carts, ";
        if ($("#build_q4").val().includes("2"))
            build_a4 += "Onboarding, ";
        if ($("#build_q4").val().includes("3"))
            build_a4 += "Triggered Messages, ";
        if ($("#build_q4").val().includes("4"))
            build_a4 += "Loyalty, ";
        if ($("#build_q4").val().includes("0"))
            build_a4 += "Other";
        $("#build_a4").html(build_a4);
        // question 4 other
        if ($("#build_other_ta1").val()) {
            $("#build_a4_other").html($("#build_other_ta1").val());
        } else {
            $("#build_a4_other").html("N/A");
        }
        // question 5
        let build_a5 = "";
        if ($("#build_q5").val().includes("1"))
            build_a5 += "Email, ";
        if ($("#build_q5").val().includes("2"))
            build_a5 += "Push Notifications, ";
        if ($("#build_q5").val().includes("3"))
            build_a5 += "SMS, ";
        if ($("#build_q5").val().includes("4"))
            build_a5 += "Social Media, ";
        if ($("#build_q5").val().includes("0"))
            build_a5 += "Other";
        $("#build_a5").html(build_a5);
        // question 5 other
        if ($("#build_other_ta2").val()) {
            $("#build_a5_other").html($("#build_other_ta2").val());
        } else {
            $("#build_a5_other").html("N/A");
        }
    }

    function assesPdfSetup() {
        // name
        $("#assess_name").html($("#user_name").val());
        // email
        $("#assess_email").html($("#email_input").val());
        // question 1
        $("#assess_a1").html($("#assess_q1").val());
        // question 2
        if ($("#assess_q2").prop('checked') == true) {
            $("#assess_a2").html("Yes");
        } else {
            $("#assess_a2").html("No");
        }
        //question 3
        let assess_a3 = "";
        if ($("#assess_q3").val().includes("1"))
            assess_a3 += "Abandoned Carts, ";
        if ($("#assess_q3").val().includes("2"))
            assess_a3 += "Onboarding, ";
        if ($("#assess_q3").val().includes("3"))
            assess_a3 += "Triggered Messages, ";
        if ($("#assess_q3").val().includes("4"))
            assess_a3 += "Loyalty, ";
        if ($("#assess_q3").val().includes("0"))
            assess_a3 += "Other";
        $("#assess_a3").html(assess_a3);
        // question 3 other
        if ($("#assess_other_ta1").val()) {
            $("#assess_a3_other").html($("#assess_other_ta1").val());
        } else {
            $("#assess_a3_other").html("N/A");
        }
        //question 4
        let assess_a4 = "";
        if ($("#assess_q4").val().includes("1"))
            assess_a4 += "Email, ";
        if ($("#assess_q4").val().includes("2"))
            assess_a4 += "Push Notifications, ";
        if ($("#assess_q4").val().includes("3"))
            assess_a4 += "SMS, ";
        if ($("#assess_q4").val().includes("4"))
            assess_a4 += "Social Media, ";
        if ($("#assess_q4").val().includes("0"))
            assess_a4 += "Other";
        $("#assess_a4").html(assess_a4);
        // question 4 other
        if ($("#assess_other_ta2").val()) {
            $("#assess_a4_other").html($("#assess_other_ta2").val());
        } else {
            $("#assess_a4_other").html("N/A");
        }
        // question 2
        if ($("#assess_q5").prop('checked') == true) {
            $("#assess_a5").html("Yes");
        } else {
            $("#assess_a5").html("No");
        }
    }

    function optimizePdfSetup() {
        // name
        $("#optimize_name").html($("#user_name").val());
        // email
        $("#optimize_email").html($("#email_input").val());
        // question 1
        $("#optimize_a1").html($("#optimize_q1").val());
        // question 2
        if ($("#optimize_q2").val() === ("1")) {
            $("#optimize_a2").html("[O1]");
        } else if ($("#optimize_q2").val() === ("2")) {
            $("#optimize_a2").html("[O2]");
        }
        // question 2 [O1]
        if ($("#optim_o1_ta").val()) {
            $("#optimize_a2_o1").html($("#optim_o1_ta").val());
        } else {
            $("#optimize_a2_o1").html("N/A");
        }
        // question 2 [O2]
        if ($("#optim_o2_ta").val()) {
            $("#optimize_a2_o2").html($("#optim_o2_ta").val());
        } else {
            $("#optimize_a2_o2").html("N/A");
        }
        //question 3
        let optimize_a3 = "";
        if ($("#optimize_q3").val().includes("1"))
            optimize_a3 += "Abandoned Carts, ";
        if ($("#optimize_q3").val().includes("2"))
            optimize_a3 += "Onboarding, ";
        if ($("#optimize_q3").val().includes("3"))
            optimize_a3 += "Triggered Messages, ";
        if ($("#optimize_q3").val().includes("4"))
            optimize_a3 += "Loyalty, ";
        if ($("#optimize_q3").val().includes("0"))
            optimize_a3 += "Other";
        $("#optimize_a3").html(optimize_a3);
        // question 3 other
        if ($("#optim_other_ta").val()) {
            $("#optimize_a3_other").html($("#optim_other_ta").val());
        } else {
            $("#optimize_a3_other").html("N/A");
        }
    }   

    // ----------------------------------------------- VALIDATION -----------------------------------------------
    // DEFAULTS
    $.validator.setDefaults({
        ignore: [],
        errorElement: 'span',
        errorPlacement: function (error, element) {
            error.addClass("helper-text");
            error.addClass("error");
            error.appendTo(element.parent());
        },
        submitHandler: function () {
            $('#submit_modal').modal('open');
        }
    });

    $("#train_card").validate({
        rules: {
            train_q1: {
                required: true,
                maxlength: 100
            },
            train_q2: {
                required: true
            },
            train_q3: {
                required: true
            },
            train_q4: {
                required: true
            },
            train_other_ta: {
                required: function (element) {
                    return $("#train_q4").val().includes("0");
                },
                minlength: 1,
                maxlength: 1000
            },
            train_q5: {
            }
        }
    });

    $("#build_card").validate({
        rules: {
            build_q1: {
                required: true,
                maxlength: 100
            },
            build_q2: {
                required: true
            },
            build_q3: {
            },
            build_q4: {
                required: true
            },
            build_other_ta1: {
                required: function (element) {
                    return $("#build_q4").val().includes("0");
                },
                minlength: 1,
                maxlength: 1000
            },
            build_q5: {
                required: true
            },
            build_other_ta2: {
                required: function (element) {
                    return $("#build_q5").val().includes("0");
                },
                minlength: 1,
                maxlength: 1000
            }
        }
    });

    $("#assess_card").validate({
        rules: {
            assess_q1: {
                required: true,
                maxlength: 100
            },
            assess_q2: {
            },
            assess_q3: {
                required: true
            },
            assess_other_ta1: {
                required: function (element) {
                    return $("#assess_q3").val().includes("0");
                },
                minlength: 1,
                maxlength: 1000
            },
            assess_q4: {
                required: true
            },
            assess_other_ta2: {
                required: function (element) {
                    return $("#assess_q4").val().includes("0");
                },
                minlength: 1,
                maxlength: 1000
            },
            assess_q5: {
            }
        }
    });

    $("#optim_card").validate({
        rules: {
            optimize_q1: {
                required: true,
                maxlength: 100
            },
            optimize_q3: {
                required: true
            },
            optim_o1_ta: {
                required: function (element) {
                    return $("#optimize_q3").val() === "1";
                },
                minlength: 1,
                maxlength: 1000
            },
            optim_o2_ta: {
                required: function (element) {
                    return $("#optimize_q3").val() === "2";
                },
                minlength: 1,
                maxlength: 1000
            },
            optimize_q4: {
                required: true
            },
            optim_other_ta: {
                required: function (element) {
                    return $("#optimize_q4").val().includes("0");
                },
                minlength: 1,
                maxlength: 1000
            }
        }
    });

    $("#modal_form").validate({
        rules: {
            user_name: {
                required: true,
                maxlength: 100
            },
            email_input: {
                required: true,
                maxlength: 100
            }
        },
        submitHandler: function () {
            createPdf();
        }
    });

    return {
        change: sectionChange,
        optimCheck: optimOptionsCheck,
        otherToggle: otherToggle,
        reset: resetPage,
        about: aboutRedirect,
        home: homeRedirect
    }
}();
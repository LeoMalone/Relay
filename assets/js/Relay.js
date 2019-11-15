"use strict";
$(document).ready(function () {
    $('select').formSelect();
    $('.tooltipped').tooltip();
    $('.modal').modal();
    $('textarea').characterCounter();
});

// PAGE VARS
var currentBtn = null;
var currentCard = null;
var buildQ2Card = null;
var optimQ2Card = null;

// BUTTON SOURCES
var btnInfo = {
    "#train_b": {
        isOn: false,
        on: "assets/site-img/Train - Pressed.png",
        off: "assets/site-img/Train - Idle.png",
        logo: "assets/site-img/Train- Main Logo.png",
        title: "assets/site-img/Train - Title.png",
        colour: "#00B0C0"
    },
    "#build_b": {
        isOn: false,
        on: "assets/site-img/Build - Pressed.png",
        off: "assets/site-img/Build - Idle.png",
        logo: "assets/site-img/Build- Main Logo.png",
        title: "assets/site-img/Build - Title.png",
        colour: "#E29032"
    },
    "#assess_b": {
        isOn: false,
        on: "assets/site-img/Assess - Pressed.png",
        off: "assets/site-img/Assess - Idle.png",
        logo: "assets/site-img/Assess- Main Logo.png",
        title: "assets/site-img/Assess - Title.png",
        colour: "#A3CF6E"
    },
    "#optimize_b": {
        isOn: false,
        on: "assets/site-img/Optimize - Pressed.png",
        off: "assets/site-img/Optimize - Idle.png",
        logo: "assets/site-img/Optimize- Main Logo.png",
        title: "assets/site-img/Optimize - Title.png",
        colour: "#916892"
    }
};

// MAIN BUTTONs HOVER FUNCTIONS
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

// FUNCTIONS
function button_change(b_id, c_id) {        // this is where the logic starts on button click
    if (currentBtn) {
        toggle_button_selected(currentBtn);
    }
    if (currentCard) {
        toggle_card_selected(currentCard);
        reset_form(currentCard);
    }
    currentBtn = b_id;
    currentCard = c_id;
    toggle_button_selected(b_id);
    toggle_card_selected(c_id);
}

function toggle_button_selected(id) {
    if (btnInfo[id].isOn) {
        $(id).attr("src", btnInfo[id].off);
        btnInfo[id].isOn = false;
    } else {
        $(id).attr("src", btnInfo[id].on);
        btnInfo[id].isOn = true;
        $("#c_logo").attr("src", btnInfo[id].logo);
        $("#c_title").attr("src", btnInfo[id].title);        
        $("#main_section").css("background", "linear-gradient(white, " + btnInfo[id].colour + ")");        
        change_theme_colour(btnInfo[id].colour);
    }
}

function toggle_card_selected(id) {
    if ($(id).is(':visible')) {
        $(id).addClass("c_hide");
    } else {
        $(id).removeClass("c_hide");
        scroll_to(id);       
    }
}

function scroll_to(id) {
    if (id == "top") {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    } else {
        $("html, body").animate({
            scrollTop: $(id).offset().top
        }, 500);
    }
}

function change_theme_colour(themeColor) {
    if(themeColor) {
        $(".btn-large").css("background-color", themeColor);
        $(".dropdown-content>li>span").css("color", themeColor);
        $(".dropdown-content>li>span>label").css("color", themeColor);
        $(".switch>label>span").css("background-color", themeColor);
    }    
}

function reset_form(id) {
    $(id).trigger("reset");
    $(".helper-text").remove();
}

function build_options_check(element) {
    if(buildQ2Card) {
        $(buildQ2Card).addClass("c_hide");
    }
    if(element.value == 1) {
        $("#build_q2_b1").removeClass("c_hide");
        buildQ2Card = "#build_q2_b1";
    } else if(element.value == 2) {
        $("#build_q2_b2").removeClass("c_hide");
        buildQ2Card = "#build_q2_b2";
    } else if(element.value == 3) {
        $("#build_q2_b3").removeClass("c_hide");
        buildQ2Card = "#build_q2_b3";
    } else if(element.value == 4) {
        $("#build_q2_b4").removeClass("c_hide");
        buildQ2Card = "#build_q2_b4";
    }
}

function optim_options_check(element) {
    if(optimQ2Card) {
        $(optimQ2Card).addClass("c_hide");
    }
    if(element.value == 1) {
        $("#optim_q2_o1").removeClass("c_hide");
        optimQ2Card = "#optim_q2_o1";
    } else if(element.value == 2) {
        $("#optim_q2_o2").removeClass("c_hide");
        optimQ2Card = "#optim_q2_o2";
    }
}

function other_toggle(option, card) {    
    if($(option).is(":checked")) {
        $(card).removeClass("c_hide");
    } else {
        $(card).addClass("c_hide");
    }    
}

// VALIDATION
// DEFAULTS
$.validator.setDefaults({
    ignore: [],    
    errorElement : 'span',       
    errorPlacement: function(error, element) {
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
        build_q5: {
            required: true
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
        assess_q4: {
            required: true
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
        optimize_q2: {
            required: true           
        },
        optimize_q3: {
            required: true
        }
    }
});


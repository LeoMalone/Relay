"use strict";

// BUTTON SOURCES
var currentBtn;
var btnInfo = {
    "#train_b": {
        isOn: false,
        on: "assets/site-img/Train - Pressed.png",
        off: "assets/site-img/Train - Idle.png",
        logo: "assets/site-img/Train- Main Logo.png",
        title: "assets/site-img/Train - Title.png",
        colour: ""
    },
    "#build_b": {
        isOn: false,
        on: "assets/site-img/Build - Pressed.png",
        off: "assets/site-img/Build - Idle.png",
        logo: "assets/site-img/Build- Main Logo.png",
        title: "assets/site-img/Build - Title.png",
        colour: ""
    },
    "#assess_b": {
        isOn: false,
        on: "assets/site-img/Assess - Pressed.png",
        off: "assets/site-img/Assess - Idle.png",
        logo: "assets/site-img/Assess- Main Logo.png",
        title: "assets/site-img/Assess - Title.png",
        colour: ""
    },
    "#optimize_b": {
        isOn: false,
        on: "assets/site-img/Optimize - Pressed.png",
        off: "assets/site-img/Optimize - Idle.png",
        logo: "assets/site-img/Optimize- Main Logo.png",
        title: "assets/site-img/Optimize - Title.png",
        colour: ""
    }
};

// BUTTON HOVER FUNCTIONS
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

function button_change(id) {
    if(currentBtn != null) {
        toggle_button_selected(currentBtn);
    }
    currentBtn = id;
    toggle_button_selected(id);
}

function toggle_button_selected(id) {
    if(btnInfo[id].isOn) {
        $(id).attr("src", btnInfo[id].off);
        btnInfo[id].isOn = false;       
    } else {
        $(id).attr("src", btnInfo[id].on);
        btnInfo[id].isOn = true;
        $("#c_logo").attr("src", btnInfo[id].logo);
        $("#c_title").attr("src", btnInfo[id].title);
    }
}
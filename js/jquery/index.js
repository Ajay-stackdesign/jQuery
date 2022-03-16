// const jquery = require("../jquery");

jQuery.noConflict();
jQuery(document).ready(($) => {
    $("button").click(() => {
        alert("hello world")
    })
})

jQuery.noConflict();
jQuery(document).ready(($) => {
    $("p").click(() => {
        alert("button clicked")
    })
})


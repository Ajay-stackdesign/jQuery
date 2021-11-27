

// jQuery.noConflict()
// jQuery(document).ready(($) => {
//     $("p").click(() => {
//         alert("btn is clicked")
//     })
// })

jQuery.noConflict()
jQuery(document).ready(($) => {
    $("#btn-id").click(() => {
        alert("btn is cliicked with id");
    })
})

jQuery.noConflict()
jQuery(document).ready(($) => {
    $(".btn-class").click(() => {
        prompt("enter the name")
    })
})


jQuery.noConflict()
jQuery(document).ready(($) => {
    $("#demo").click(() => {
        alert("paragraph is cclicked")
    })
    $("p").dblclick(() => {
        alert("dblclick");
    })

    $("p").mouseover(() => {
        alert("mouseover")
    })
    $("#demo").mouseleave(() => {
        alert("mouseleave")
    })
})

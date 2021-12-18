

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

jQuery.noConflict()
jQuery(document).ready(($) => {
    $("#text").keydown(() => {
        console.log("keydown")
    })
    $("#text").keypress(() => {
        console.log("keyppresses")
    })
    $("#text").keyup(() => {
        console.log("kkeyup")
    })
})
// jQuery.noConflict();
// jQuery(document).ready(($) => {
//     $("#text").keydown(() => {
//         console.log("keydown")
//     })
//     $("#text").keypress(() => {
//         console.log("keypress")
//     })
//     $("#text").keyup(() => {
//         console.log("keyup")
//     })
// })

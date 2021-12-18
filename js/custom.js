

// jQuery(selector).click(function()=>{   this is syntax

// })

// $("button").click(function () {
//         console.log("jquery")
//     })  

// jQuery.noConflict();
// jQuery(document).ready(($) => {
//     $("p").click(() => {alert("button clicked")})

//     $("#btn-id").click(() => {
//         alert("button with id clicked")
//     })

//     $(".btn-class").click(() => {
//         alert("btn-class")
//     })
// })

// jQuery.noConflict();
// jQuery(document).ready(($) => {
//     $("p").click(() => {
//         console.log("clicked")
//     })
//     $("p").dblclick(() => {
//         console.log("dblclicked")
//     })
//     $("p").mouseenter(() => {
//         console.log("mouse enter")
//     })
//     $("p").mouseleave(() => {
//         console.log("mouse leave")
//     })
// })


jQuery.noConflict();
jQuery(document).ready(($) => {
    $("#text").keydown(() => {
        console.log("keydown")
    })
    $("#text").keypress(() => {
        console.log("keypress")
    })
    $("#text").keyup(() => {
        console.log("keyup")
    })
})

// jQuery.noConflict();
// jQuery(document).ready(($) => {
//     $("#username").focus(() => {
//         console.log("blur")
//     })
//     $("#form-submit").submit((e) => {
//         console.log("form subitted")
//         e.preventDefault()
//     })
//     $(window).resize(function(){
//         console.log("wondow resize")
//     })
// })

// jQuery.noConflict();
// jQuery(document).ready(($) => {
//     $("#btn-hide").click(() => {
//         $("#image-id").hide(5000,() => {
//             console.log("imahe is")
//         });
//     })   
//     $("#btn-show").click(() => {
//         $("#image-id").show(5000,() => {
//             console.log("hi show ")
//         })
//     }) 
//     $("#btn-toggle").click(() => {
//         $("#image-id").toggle(() => {
//             console.log("hide/show")
//         })
//     })
// })

// jQuery.noConflict();
// jQuery(document).ready(($) =>{
//     $("#btn-fadeIn").click(() => {
//         $("#image-id").fadeIn(() => {
//             console.log("fade in")
//         })
//     })
//     $("#btn-fadeTo").click(() => {
//         $("#image-id").fadeTo(1000,0.5,() => {
//             console.log("fade To")
//         })
//     })
//     // $("#btn-toggle").click(() => {
//     //     $("#image-id").fadeToggle(() => {
//     //         console.log("fade in")
//     //     })
//     // })
// })

// jQuery.noConflict();
// jQuery(document).ready(($) => {
//     $("#btn-hide").click(() => {
//         $("#image-id").show(() => {
//             console.log("hi show ")
//         })
//     })
// })

// jQuery.noConflict();
// jQuery(document).ready(($) => {
//     $("#slideUp").click(() => {
//         $("#image-id").slideUp(() => {
//             console.log("sldie up")
//         })
//     })
//     $("#slideDown").click(() => {
//         $("#image-id").slideDown(() => {
//             console.log("slide Down")
//         })
// //     })
//     $("#slideToggle").click(() => {
//         $("#image-id").slideToggle(() => {
//             console.log("slide toggle")
//         })
//     })
// })
// jQuery.noConflict();
// jQuery(document).ready(($) => {
//     $("#zom-id").click(() => {
//         $("#zombie").animate({left: "+=80"},() => {
//             console.log("zombie animation")
//         })
//     })
//     //get text area
//     let text = $("p").text();
//     console.log(text);


//     //get text
//    // let textArea = $("p").text("hello world")
//     //console.log(textArea);

//     //get and set value sing val();

//     let value = $("#name").val()
//     console.log(value)

//     $("#btn1").click(() => {
//         $("#name").val("ajay sahani")
//     })
// })
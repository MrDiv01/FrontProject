
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin:20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});


$(".clas2").mouseover(function () {
    $(".shopTR").css("width", "45px")
})
$(".clas2").mouseout(function () {
    $(".shopTR").css("width", "0px")
})
$(".clas3").mouseover(function () {
    $(".pageTR").css("width", "55px")
})
$(".clas3").mouseout(function () {
    $(".pageTR").css("width", "0px")
})
$(".clas4").mouseover(function () {
    $(".blogTR").css("width", "40px")
})
$(".clas4").mouseout(function () {
    $(".blogTR").css("width", "0px")
})
$(".clas5").mouseover(function () {
    $(".saleTR").css("width", "37px")
})
$(".clas5").mouseout(function () {
    $(".saleTR").css("width", "0px")
})
$(".clas6").mouseover(function () {
    $(".buyTR").css("width", "80px")
})
$(".clas6").mouseout(function () {
    $(".buyTR").css("width", "0px")
})


let open = document.getElementById("bar");
let menu = document.getElementById("menuulli");
let cancel= document.getElementById("delete")

    function opensliderbar() {
        menu.style.left = "0";
        menu.style.transition = "all 0.5s ease-in-out"
        cancel.style.display = "inline"

    }
    function closesliderbar(){
        menu.style.left = "-100%";
        menu.style.transition = "all 0.5s ease-in-out"
    }



    let openn = document.getElementById("searchpanel");
    function openslide(){
        openn.style.top = "0";
        openn.style.transition = "all 0.5s ease-in-out"

    }
    function closeslide(){
       openn.style.top = "-100%"
        openn.style.transition = "all 0.5s ease-in-out"
    }

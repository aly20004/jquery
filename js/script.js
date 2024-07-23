let ulWidth = $(".navBar ul").innerWidth()
let detailsOffset = $("#Details").offset().top
let toggleWidth = $(".toggle").innerWidth()
let maxComments = 100


var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}
if (baseURL = "/") {
    location.replace("#Home");
}

$(".navBar li").on("click", (e) => {
    $(".navBar li a").removeClass("active")
    $(e.target).addClass("active")
    let currentPage = $(e.target).attr("href");
    let currentOffset = $(currentPage).offset().top
    $("html, body").css("scroll-behavior", "auto")
    $("html, body").animate({ scrollTop: currentOffset }, 1000)

})


$(".toggle").on("click", function () {
    $(".navBar ul").removeClass("d-none")
    if ($(".navBar").css("left") == `0px`) {
        $(".navBar").animate({ left: `-${ulWidth}px` }, 1000)
        $(".toggle").animate({ left: `0px` }, 1000)
    } else {
        $(".navBar").animate({ left: `0px` }, 1000)
        $(".toggle").animate({ left: `${ulWidth}px` }, 1000)

    }
});
$(".fa-circle-xmark").on("click", function () {
    $(".navBar").animate({ left: `-${ulWidth}px` }, 1000)
    $(".toggle").animate({ left: `0px` }, 1000)

});


$(".all-items h2").on("click", function (e) {
    $(".all-items p").slideUp(500)
    $(e.target).next().slideDown(500)
}
);


function countDown() {
    let countDownDate = new Date("09/21/2025 12:1 AM")
    let currentDate = new Date()
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let distance = countDownDate.getTime() - currentDate.getTime()
    let days = Math.floor(distance / day);
    let hours = Math.floor((distance % day) / hour);
    let minutes = Math.floor((distance % hour) / minute);
    let seconds = Math.floor((distance % minute) / second);

    $('.days').html(`${days} days`);
    $('.hours').html(`${hours} hrs`);
    $('.minutes').html(`${minutes} mins`);
    $('.seconds').html(`${seconds} secs`);
}
setInterval(countDown, 1000);



$("#uComments").on("input", function (e) {
    let currentCount = $(e.target).val()
    if (currentCount.length > maxComments - 1) {
        $(".numberCount").html("THERE'S NO ANY")
        $("#uComments").attr("disabled", "disabled")
    }
    else {
        $(".numberCount").html(`${maxComments - currentCount.length}`)
    }
});
$(".btn-secondary").one("click", function () {
    $("#uComments").removeAttr("disabled")
});

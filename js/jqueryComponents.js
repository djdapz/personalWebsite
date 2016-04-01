/**
 * Created by djdapz on 4/1/16.
 */
//make the navbar shrink
$(window).scroll(function() {
    if ($(document).scrollTop() > 400) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});


//functions to offset the navbar
////todo make this more reliable
//function offsetAnchor() {
//    if(location.hash.length !== 0) {
//        window.scrollTo(window.scrollX, window.scrollY - 40);
//    }
//}
//
//$(window).on("hashchange", function () {
//    offsetAnchor();
//});
//
//window.setTimeout(function() {
//    offsetAnchor();
//}, 1);

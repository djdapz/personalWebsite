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


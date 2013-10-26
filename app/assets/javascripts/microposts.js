function updateCountdown() {
    var remaining = 140 - jQuery('#micropost_content').val().length;
    jQuery('.countdown').text(remaining + ' characters remaining');
}

// 2 ways of executing the function, because Turbolinks doesn work with .ready()
$(document).ready(function() {
    updateCountdown();
    $('#micropost_content').change(updateCountdown);
    $('#micropost_content').keyup(updateCountdown);
});

$(document).on('page:load', function() {
    updateCountdown();
    $('#micropost_content').change(updateCountdown);
    $('#micropost_content').keyup(updateCountdown);
});
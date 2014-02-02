$(document).ready(function() {
    $('#button').on('click', function() {
        var d = $('#sample');
        $("html, body").animate({ scrollTop: d.prop("scrollHeight") }, "slow");
    });
});

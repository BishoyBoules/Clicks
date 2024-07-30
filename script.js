$(document).ready(function() {
    $('#subscribeButton').click(function(event) {
        event.preventDefault();
        var email = $('#email').val();

        if (email.trim() === '') {
            alert('الرجاء إدخال بريد إلكتروني صحيح.');
            return;
        }

        setTimeout(function() {
            $('#subscriptionModal').modal('show');
        }, 1000);
    });
});
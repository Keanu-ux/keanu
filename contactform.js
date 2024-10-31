(function() {
    emailjs.init("3Z5IrM_tvp7Yx_frS");
})();

$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        event.preventDefault();

        emailjs.sendForm('service_zjdrhe5', 'template_0al2b5l', this)
        .then(function(response) {
            alert('Message sent successfully!');
            $('#contact-form')[0].reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        });
    });
});

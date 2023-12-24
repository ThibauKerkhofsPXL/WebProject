document.addEventListener('DOMContentLoaded', function () {
    var clickableImage = document.getElementById('clickableImage');

    if (clickableImage) {
        clickableImage.addEventListener('click', function () {
            // Redirect to a different page
            window.location.href = 'https://www.linkedin.com/in/thibau-kerkhofs-370415296/';
        });
    }
});

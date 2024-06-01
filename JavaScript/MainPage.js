/* Om naar de geselecteerde pagina te gaan via de radio */

document.addEventListener('DOMContentLoaded', function () {
    var radioButtons = document.querySelectorAll('input[name="slide"]');

    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (this.checked) {
                var value = this.value;
                switch (value) {
                    case 'Page 1':
                        window.location.href = 'OverMezelf.html';
                        break;
                    case 'Page 2':
                        window.location.href = 'VorigeProjecten.html';
                        break;
                    case 'Page 3':
                        window.location.href = 'Contactgegevens.html';
                        break;
                    case 'Page 4':
                        window.location.href = 'portfolioRouterPage.html';
                        break;
                }
            }
        });
    });

    // Clear checked state when navigating back using the browser
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            radioButtons.forEach(function (radio) {
                radio.checked = false;
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            let pageURL;
            switch (this.id) {
                case 'c1':
                    window.location.href = 'portfolioWPL1.html';
                    break;
                case 'c2':
                    window.location.href = 'portfolioWPL2.html';
                    break;
                case 'c3':
                    window.location.href = 'portfolioWPL3.html';
                    break;
                case 'c4':
                    window.location.href = 'portfolioWPL4.html';
                    break;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.section-link');

    sections.forEach(function (section) {
        section.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function (){
    var sections = document.querySelectorAll('.ulFromNavbar .liFromNavbar');

    sections.forEach(function (section){
        var terugLi = section.querySelector('a').innerText;

        if (terugLi === 'Terug naar hoofdpagina') {
            section.classList.add('terugNaarHoofdpagina');
        }
    })
})
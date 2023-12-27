document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.link_scroll .link');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();            
            menuLinks.forEach(function(link) {
                link.classList.remove('active');
            });            
            e.currentTarget.classList.add('active');

            var sectionId = e.currentTarget.getAttribute('href').substring(1);
            smoothScroll({ toElement: document.getElementById(sectionId) });
        });
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu-mobile');
    menu.classList.toggle('show');
}


document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.site-header');
    var menuToggle = document.querySelector('.mobile-menu-toggle');
    var mainNav = document.querySelector('.main-nav');

    function closeMenu() {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            var open = mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active', open);
            menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // Smooth scroll for in-page links, offset by the sticky header
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            closeMenu();
            var top = target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });

    // Solid header once scrolled past the hero top
    function onScroll() {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Reveal sections as they enter the viewport
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in-view'); });
    }
});

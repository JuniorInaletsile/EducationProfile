/* =========================
   MOBILE MENU
========================= */

const menuIcon = document.querySelector('.menu-icon i');

const navbar = document.querySelector('.navbar');

const navLinks = document.querySelectorAll('.navbar a');


menuIcon.addEventListener('click', () => {

    navbar.classList.toggle('active');

    menuIcon.classList.toggle('bx-menu');

    menuIcon.classList.toggle('bx-x');

});


/* =========================
   CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
========================= */

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navbar.classList.remove('active');

        menuIcon.classList.add('bx-menu');

        menuIcon.classList.remove('bx-x');

    });

});


/* =========================
   ACTIVE NAVIGATION
   WHILE SCROLLING
========================= */

const sections = document.querySelectorAll('section[id]');


window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;


    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        const id = section.getAttribute('id');

        const link =
            document.querySelector(
                `.navbar a[href="#${id}"]`
            );


        if (
            link &&
            scrollY >= sectionTop &&
            scrollY < sectionBottom
        ) {

            navLinks.forEach(item => {

                item.classList.remove('active');

            });

            link.classList.add('active');

        }

    });

});

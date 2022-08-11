let nav = document.querySelector('nav')
window.onscroll = () => {
    if (window.scrollY >= 100) {
        nav.classList.add('window-scrolled')

    } else {
        nav.classList.remove('window-scrolled')
    }
}

// dark-mood
// Dark-mode
darkmood = document.getElementById("darkmood");

darkmood.onclick = function() {
    darkmood.classList.toggle("active");
    document.body.classList.toggle("purple-theme");
};

const Textbuttons = document.querySelectorAll('.contact-btn');
Textbuttons.forEach((Textbutton) => {
    let text = Textbutton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style = "transform: rotate(${index * 12}deg)">${character}</span>`).join('')





});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 40

        }
    }

});


const navlink = document.querySelector('.nav-links');
const OpenNavbtn = document.getElementById('nav-toggle-open')
const CloseNavbtn = document.getElementById('nav-toggle-close');

const OpenNav = () => {
    navlink.style.display = 'flex';
    CloseNavbtn.style.display = 'inline-block';
    OpenNavbtn.style.display = 'none';




};

OpenNavbtn.addEventListener('click', OpenNav);


const CloseNav = () => {
    navlink.style.display = 'none';
    OpenNavbtn.style.display = 'inline-block';

    CloseNavbtn.style.display = 'none';




}

CloseNavbtn.addEventListener('click', CloseNav);

navlink.querySelectorAll('li a').forEach(navlinks => {
    navlinks.addEventListener('click', CloseNav)

})
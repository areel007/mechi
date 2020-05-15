const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('header nav ul');
const mobileMenuLink = document.querySelectorAll('.links');
const body = document.querySelector('body');
let mobileMenuOut = false;
const barOne = document.querySelector('#one');
const barTwo = document.querySelector('#two');
const barThree = document.querySelector('#three');

// const mql = window.matchMedia('(max-width: 1250px)');

mobileMenuLink.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuLink.forEach(_link => _link.classList.remove('active'));
        link.classList.add('active')
    })
})

hamburger.addEventListener(
    'click',
    () => {
        mobileMenuOut = !mobileMenuOut;
        if (mobileMenuOut) {
            mobileMenu.classList.add('mobile-menu-open');
            body.style.overflow = 'hidden';
        }
        else {
            mobileMenu.classList.remove('mobile-menu-open');
            body.style.overflow = 'scroll'
        }
    }
);

const arr = Array.from(mobileMenuLink);

arr.forEach(link => {
    link.addEventListener(
        'click',
        () => {
            mobileMenu.classList.remove('mobile-menu-open');
            body.style.overflow = 'scroll';
        })
});



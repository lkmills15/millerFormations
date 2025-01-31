const toggle = document.querySelector('.mobile-nav-toggle');
const mobileMenu = document.querySelector('.mobile-nav-items');
const mobileLinks = document.querySelector('.mobile-menu-items');

toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    console.log(mobileMenu);
})

mobileLinks.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
})


const $ = document;
const hamburgerMenu = $.querySelector('#hamburgerMenu');
const modalCon = $.querySelector('#modalCon');
const modal = $.querySelector('#modal');
const closeModal = $.querySelector('#closeModal');
const navbar = $.querySelector('#navComp');

hamburgerMenu.addEventListener('click', () => {
    modalCon.classList.remove('hidden');
    modalCon.classList.add('block');

    modal.classList.remove('modal-place')
    modal.classList.add('modal-move')
})

closeModal.addEventListener('click', () => {
    modalCon.classList.remove('block');
    modalCon.classList.add('hidden');

    modal.classList.remove('modal-move')
    modal.classList.add('modal-place')
})

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 10) {
        navbar.classList.remove('backdrop-blur-sm');
        navbar.classList.remove('absolute');
        navbar.classList.add('backdrop-blur-lg');
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('backdrop-blur-lg');
        navbar.classList.remove('fixed');
        navbar.classList.add('absolute');
        navbar.classList.add('backdrop-blur-sm');
    }

})
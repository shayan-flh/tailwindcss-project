// const $ = document;

const customer1 = $.querySelector('#customer-1');
const infoDiv1 = $.querySelector('#infoDiv1');
const titleDiv1 = $.querySelector('#titleDiv1');

const customer2 = $.querySelector('#customer-2');
const infoDiv2 = $.querySelector('#infoDiv2');
const titleDiv2 = $.querySelector('#titleDiv2');

const customer3 = $.querySelector('#customer-3');
const infoDiv3 = $.querySelector('#infoDiv3');
const titleDiv3 = $.querySelector('#titleDiv3');

// console.log(arr);


customer1.addEventListener('mouseenter', (e) => {
    customer1.classList.add('active');
    customer1.classList.remove('not-active');

    let arr = customer1.className.split(' ');
    customer2.classList.remove('active');
    customer2.classList.add('not-active');

    customer3.classList.remove('active');
    customer3.classList.add('not-active');

    if (arr.includes('active')) {
        titleDiv1.style.display = 'none';
        infoDiv1.style.display = 'block';

        titleDiv2.style.display = 'flex';
        infoDiv2.style.display = 'none';

        titleDiv3.style.display = 'flex';
        infoDiv3.style.display = 'none';
    }
});

customer2.addEventListener('mouseenter', (e) => {
    customer2.classList.add('active');
    customer2.classList.remove('not-active');

    let arr = customer2.className.split(' ');

    customer1.classList.remove('active');
    customer1.classList.add('not-active');

    customer3.classList.remove('active');
    customer3.classList.add('not-active');

    if (arr.includes('active')) {
        titleDiv2.style.display = 'none';
        infoDiv2.style.display = 'block';

        titleDiv1.style.display = 'flex';
        infoDiv1.style.display = 'none';

        titleDiv3.style.display = 'flex';
        infoDiv3.style.display = 'none';
    }
});

customer3.addEventListener('mouseenter', (e) => {
    customer3.classList.add('active');
    customer3.classList.remove('not-active');

    let arr = customer2.className.split(' ');

    customer1.classList.remove('active');
    customer1.classList.add('not-active');

    customer2.classList.remove('active');
    customer2.classList.add('not-active');

    if (arr.includes('active')) {
        titleDiv3.style.display = 'none';
        infoDiv3.style.display = 'block';

        titleDiv1.style.display = 'flex';
        infoDiv1.style.display = 'none';

        titleDiv2.style.display = 'flex';
        infoDiv2.style.display = 'none';
    }
});
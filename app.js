const toggleBtn = document.querySelector('.fs-1');
const iconRev = document.getElementById('iconRev');


toggleBtn.addEventListener('click', e => {
    console.log('btn clicked');
    var e = document.body;
    e.classList.toggle("dark");

    if (toggleBtn.classList.contains('text-dark')) {
        toggleBtn.classList.remove('text-dark');
        toggleBtn.classList.add('text-light');
        iconRev.classList.remove('flip');
    }
    else {
        toggleBtn.classList.remove('text-light');
        toggleBtn.classList.add('text-dark');
        iconRev.classList.add('flip');
    }

    
});

// const toggleBtn = document.querySelector('.btn-dark');

// toggleBtn.addEventListener('click', e => {
//     console.log('btn clicked');
//     var e = document.body;
//     e.classList.toggle("dark");
//     if (toggleBtn.textContent === 'light') {
//         toggleBtn.textContent = 'dark';
//         toggleBtn.classList.remove('btn-light');
//         toggleBtn.classList.add('btn-dark');

//     } else {
//         toggleBtn.textContent = 'light';
//         toggleBtn.classList.remove('btn-dark');
//         toggleBtn.classList.add('btn-light');
//     }
// });
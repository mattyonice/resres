const toggleBtn = document.querySelector('.fs-4');

toggleBtn.addEventListener('click', e => {
    console.log('btn clicked');
    var e = document.body;
    e.classList.toggle("dark");

    // toggleBtn.classList.remove('text-dark');
    // toggleBtn.classList.add('text-light');

    if (toggleBtn.classList.contains('text-dark')) {
        toggleBtn.classList.remove('text-dark');
        toggleBtn.classList.add('text-light');
    }
    else {
        toggleBtn.classList.remove('text-light');
        toggleBtn.classList.add('text-dark');

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
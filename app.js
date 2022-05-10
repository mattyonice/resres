const toggleBtn = document.querySelector('.btn-dark');

toggleBtn.addEventListener('click', e => {
    console.log('btn clicked');
    var e = document.body;
    e.classList.toggle("dark");
    if (toggleBtn.textContent === 'light') {
        toggleBtn.textContent = 'dark';
        toggleBtn.classList.remove('btn-light');
        toggleBtn.classList.add('btn-dark');

    } else {
        toggleBtn.textContent = 'light';
        toggleBtn.classList.remove('btn-dark');
        toggleBtn.classList.add('btn-light');
    }
});
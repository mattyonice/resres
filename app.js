const toggleBtn = document.querySelector('.fs-1');
const iconRev = document.getElementById('iconRev');
const pdf = document.getElementById('pdf');
// const share = document.getElementById('share');
// share.classList.add('flip')

toggleBtn.addEventListener('click', e => {
    // console.log('toggle dartk light clicked');
    var e = document.body;
    e.classList.toggle("dark");

    if (toggleBtn.classList.contains('text-dark')) {
        toggleBtn.classList.remove('text-dark');
        toggleBtn.classList.add('text-light');

        pdf.classList.remove('text-dark');
        pdf.classList.add('text-light');

        iconRev.classList.remove('flip');
        localStorage.setItem('darkLight', 1);

    }
    else {
        toggleBtn.classList.remove('text-light');
        toggleBtn.classList.add('text-dark');

        pdf.classList.remove('text-light');
        pdf.classList.add('text-dark');

        iconRev.classList.add('flip');
        localStorage.setItem('darkLight', 0);

    }


});

const body = document.querySelector('body');

pdf.addEventListener('click', e => {
    // console.log('clicked pdf');
    html2pdf()
        .from(body)
        .save();
});
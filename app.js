const toggleBtn = document.querySelector('.fs-1');
const iconRev = document.getElementById('iconRev');
const pdf = document.getElementById('pdf');
// const share = document.getElementById('share');
// share.classList.add('flip')



const body = document.querySelector('body');

pdf.addEventListener('click', e => {
    console.log('clicked pdf');
    window.location.href = "/Sathappan_Resume.pdf";

    // html2pdf()
    //     .from(body)
    //     .save();
});


// document.getElementById('pdfLink').addEventListener('click', e => {
//     console.log('clicked url');
//     html2pdf()
//         .from(body)
//         .save();
// });
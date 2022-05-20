let root = document.documentElement;
let paupiere = document.querySelectorAll('.oeil-dessous');
let iris = document.querySelectorAll('.iris');

document.addEventListener('mousemove', e => {
    let x = e.clientX / innerWidth;
    let y = e.clientY / innerHeight;

    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});

document.addEventListener('click', () => {
    if (getComputedStyle(paupiere[0]).getPropertyValue('--iris-radius') != "50%") {
        root.style.setProperty('--iris-radius', '50%');
        root.style.setProperty('--iris-color', 'blue');
        // iris.forEach(el => {
        //     el.setAttribute('style', 'background : blue');
        // });
    }
    else {
        root.style.setProperty('--iris-radius', '25%');
        root.style.setProperty('--iris-color', 'red');
        // iris.forEach(el => {
        //     el.setAttribute('style', 'background : red');
        // });
    }
});
window.onload = function () {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction);
    x.addEventListener('click', mySecondFunction);
    x.addEventListener('mouseout', myThirdFunction);
}

function myFunction() {
    return () => document.getElementById('demo').textContent = 'Moused over!';
}

function mySecondFunction() {
    return () => document.getElementById('demo').textContent = 'Clicked!';
}

function myThirdFunction() {
    return () => document.getElementById('demo').textContent = 'Moused out!';
}
const run = document.querySelector('.run')
const pipe = document.querySelector('.pipe')


const jump =() => {
    run.classList.add('jump');

    setTimeout(() => {

        run.classList.remove('jump');

    },500)
}

const loop = setInterval(() => {
    const pipeposition = pipe.offsetLeft;
    const runposition =  +window.getComputedStyle(run).bottom.replace('px','');


    if (pipeposition <= 120 && pipeposition > 0 && runposition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${120}px`;

        run.style.animation = 'none';
        run .style.bottom = `${0}`;

        run.src = './Imagens/over.gif'
        run.style.width = '75px'
        run.style.marginleft = '50px'

        clearInterval(loop);

    }

}, 10)

document.addEventListener("keydown", jump)
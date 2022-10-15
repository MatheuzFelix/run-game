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

    console.log(runposition )
    console.log(runposition)

    if (pipeposition <= 120) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;
        pipe.style


    }

}, 10)

document.addEventListener("keydown", jump)
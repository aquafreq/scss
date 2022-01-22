window.addEventListener('load', () => {
    const box3 = document.querySelector('.box-3')
    
    document.addEventListener('click', () => {
        box3.classList.toggle('animation-play-state-paused');
    })
})
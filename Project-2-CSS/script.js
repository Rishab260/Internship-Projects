const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        Inactive();
        panel.classList.add('active');
    })
})

function Inactive(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
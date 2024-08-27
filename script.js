const game = document.querySelector('.game')
const modal = document.querySelector('.modal-section')
const trigger = document.querySelector('.trigger')

let step = 1

function addStep() {
    step = step + 1
}



function startWheel() {
    game.setAttribute('data-spin', step)
    trigger.style.pointerEvents = 'none';
    setTimeout(() => trigger.style.pointerEvents = 'auto', 6600);

    setTimeout(() => modal.setAttribute('data-modal', step + 1), 6600);
    setTimeout(() => modal.classList.add('show'), 6600);

    if (step <= 2) {
        setTimeout(() => step = step + 1, 6600);
    }

}

function closeModal() {
    modal.classList.remove('show')
}

let container = document.querySelector('.boxContainer')
let gridController = document.querySelector('#gridSize')
let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;
/* Default grid */
gridController.addEventListener('input', createGrid)
createGrid(4)

const eraseBar = document.querySelector('.resetlabel')
eraseBar.addEventListener('click', eraseColor)



/* Function to create box and put it in grid */
function createGrid(gridNum) {
    removeGrid()
    gridNum = gridController.value;
    for (let i = 0; i < gridNum * gridNum; i++) {
        const boxes = document.createElement('div')
        container.appendChild(boxes)
        boxes.classList.add('boxes')
        container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    } colorGrid()

}

/* Color background according to radio button value */
function colorGrid() {
    let boxes = document.querySelectorAll('.boxes')
    for (let box of boxes) {
        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                getColorMode()
                if (modeValue === 'black') {
                    box.style.backgroundColor = 'black'
                } else if (modeValue === 'rainbow') {
                    box.style.backgroundColor = makeRandomColor()
                } else if (modeValue === 'dark') {
                    box.style.backgroundColor = ''
                }
            }
        })
        box.addEventListener('click', () => {
            getColorMode()
            if (modeValue === 'black') {
                box.style.backgroundColor = 'black'
            } else if (modeValue === 'rainbow') {
                box.style.backgroundColor = makeRandomColor()
            } else if (modeValue === 'dark') {
                box.style.backgroundColor = ''
            }
        }
        )
    }
}

/* Get the value of radio button when checked */
function getColorMode() {
    let colorModes = document.querySelectorAll('#colorMode')
    for (i = 0; i < colorModes.length; i++) {
        if (colorModes[i].checked) {
            return modeValue = colorModes[i].getAttribute('value')
        }
    }
}

/* Generate random RGB for rainbow color mode */
function makeRandomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

/* Function for erasing the whole canvas */
function eraseColor() {
    boxes = document.querySelectorAll('.boxes')
    for (let box of boxes) {
        box.style.backgroundColor = ''
    }
}

/* Reset(remove) current grid size */
function removeGrid() {
    let boxes = container.querySelectorAll('div')
    for (let box of boxes) { box.remove() }
}
/*Original code************************************************* */
/* Select the box grid and add a click event to change color */
/* When mouse is clicked && moving, color the box */

// let blackBtn = document.querySelector('.black')
// blackBtn.addEventListener('click', colorGrid)
// function colorGrid() {
//     const boxes = document.querySelectorAll('.boxes')
//     for (let box of boxes) {
//         box.addEventListener('mouseover', () => {
//             if (mouseDown) {
//                 box.style.backgroundColor = 'black'
//                 // box.classList.add('colored')
//             }
//         })
//         box.addEventListener('click', () => box.style.backgroundColor = 'black')
//     }
// }

// let rainbowBtn = document.querySelector('.rainbow')
// rainbowBtn.addEventListener('click', colorRainbow)
// function colorRainbow() {
//     const boxes = container.querySelectorAll('div')
//     for (let box of boxes) {
//         box.addEventListener('mouseover', () => {
//             if (mouseDown) {
//                 box.style.backgroundColor = makeRandomColor()
//             }
//         })
//         box.addEventListener('click', () => box.style.backgroundColor = makeRandomColor())
//     }
// }



// let darkModeBtn = document.querySelector('.dark')
// darkModeBtn.addEventListener('click', colorFluore)
// function colorFluore() {
//     let boxes = container.querySelectorAll('div')
//     for (let box of boxes) {
//         box.addEventListener('mouseover', () => {
//             if (mouseDown) {
//                 box.classList.add('fluore')
//             }
//         })
//         box.addEventListener('click', () => box.classList.add('fluore'))
//     }
// }
/************************************************* */


/* 15th July _  color grid () is not working when new grid is made*/


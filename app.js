const board = document.querySelector('#board')
const colors = ['#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#4B0082', '#6A5ACD', '#483D8B']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // square.addEventListener('mouseover', () => {
    //     setColor(square)
    // })
    square.addEventListener('mouseover', setColor)

    // square.addEventListener('mouseleave', () => {
    //     removeColor(square)
    // })
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

// function setColor(element) {
//     const color = getRandomColor()
//     element.style.backgroundColor = color
//     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }

// function removeColor(element) {
//     element.style.backgroundColor = '#1d1d1d'
//     element.style.boxShadow = `0 0 2px #000`
// }

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
    
    // return colors[Math.floor(Math.random() * colors.length)]
}
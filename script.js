const board = document.querySelector('#board')
const colors = [ "#32CD32", "#3CB371", "#00FF7F", "#66CDAA", "#20B2AA", "#008080", "#40E0D0", "#00FFFF", "#00CED1", "#FF7F50", "#FF8C00", "#FFA07A", "#FF4500", "#FFD700", "#FFC0CB", "#FF1493", "#FF00FF", "#FF69B4", "#FF00FF", "#FF1493", "#DC143C", "#C71585", "#DB7093", "#FFB6C1", "#FFC0CB", "#FFA500", "#FFD700", "#FFFF00", "#FFFFE0", "#F0FFF0", "#FFFFF0", "#F5FFFA", "#F0FFFF", "#F0F8FF", "#F8F8FF", "#FAEBD7", "#FFFFFF", "#F5F5F5", "#DCDCDC", "#D3D3D3", "#C0C0C0", "#A9A9A9", "#808080", "#696969", "#000000", "#800000", "#8B0000", "#A52A2A", "#B22222", "#DC143C", "#FF0000", "#FF4500", "#FF6347", "#FF7F50", "#FF8C00", "#FFA07A", "#FFA500", "#FFB6C1", "#FFC0CB", "#FFD700", "#FFDAB9", "#FFDEAD", "#FFE4B5", "#FFE4C4", "#FFE4E1", "#FFEBCD", "#FFEFD5", "#FFF0F5", "#FFF5EE", "#FFF8DC", "#FFFACD", "#FFFAF0", "#FFFAFA", "#FFFF00", "#FFFFE0", "#FFFFF0"];
const SQUARES_NUMBER = 500

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
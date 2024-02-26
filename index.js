const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const blue = Math.round(Math.random() * 255)
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)

    const color = `rgb(${blue}, ${red}, ${green}})`
    body.style.backgroundColor = color;
}
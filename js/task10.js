const canvas = document.querySelector('.task10__canvas');
const ctx = canvas.getContext('2d');

let ClientX = null, ClientY = null;

canvas.addEventListener('mousedown', (e) => { drawRect(ClientX, ClientY, 50, 50, 'black') })
canvas.addEventListener('mousemove', (e) => { ClientX = e.offsetX; ClientY = e.offsetY })

function drawRect(x, y, width, height, color){
    ctx.filStyle = color;
    ctx.fillRect(x, y, width, height);
}

function moveRect(x, y, width, height, color){
    ctx.clearRect(x, y, width, height);
}

this.drawRect(0, 0, 50, 50, 'black');
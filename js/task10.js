const canvas = document.querySelector('.task10__canvas');
const ctx = canvas.getContext('2d');
const figure = new Map([
	['house', { x: null, y: null, width: 200, height: 100, color: 'rgb(42, 232, 207)', selected: false, }],
	['window', { x: null, y: null, width: 40, height: 50, color: 'rgb(200, 232, 224)', selected: false, }],
	['roof', { x: null, y: null, width: 240, height: 50, color: 'rgb(227, 95, 34)', selected: false, }],
]);

let ClientX = null, ClientY = null, mouseclick = false, isSelected = false;

canvas.addEventListener('mousedown', _ => { mouseclick = true; })
canvas.addEventListener('mouseup', _ => { mouseclick = false; })
canvas.addEventListener('mousemove', (e) => { ClientX = e.offsetX; ClientY = e.offsetY; })

function drawFigure() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawRoof(figure.get('roof'));
	drawHouse(figure.get('house'));
	drawWindow(figure.get('window'));

	if (moveWindow(figure.get('window'))) { }
	else if (moveHouse(figure.get('house'))) { }
	else if (moveRoof(figure.get('roof'))) { }

	requestAnimationFrame(drawFigure);
}

drawFigure();

function drawWindow(value) {
	initalValues(value);
	ctx.save();
	ctx.beginPath();
	ctx.rect(value.x, value.y, value.width, value.height);
	ctx.fill();
	ctx.strokeStyle = 'black';
	ctx.stroke();
	ctx.moveTo(value.x + value.width / 2, value.y);
	ctx.lineTo(value.x + value.width / 2, value.y + value.height);
	ctx.stroke();
	ctx.moveTo(value.x, value.y + value.height / 2);
	ctx.lineTo(value.x + value.width, value.y + value.height / 2);
	ctx.stroke();
}

function moveWindow(value) {
	ctx.beginPath();
	ctx.rect(value.x, value.y, value.width, value.height);
	if (mouseclick && ctx.isPointInPath(ClientX, ClientY)) {
		value.x = ClientX - value.width / 2;
		value.y = ClientY - value.height / 2;
		return true;
	}
}

function drawHouse(value) {
	initalValues(value);
	ctx.beginPath();
	ctx.rect(value.x, value.y, value.width, value.height);
	ctx.fill();
}

function moveHouse(value) {
	ctx.beginPath();
	ctx.rect(value.x, value.y, value.width, value.height);
	if (mouseclick && ctx.isPointInPath(ClientX, ClientY)) {
		value.x = ClientX - value.width / 2;
		value.y = ClientY - value.height / 2;
		return true;
	}
}

function drawRoof(value) {
	initalValues(value);
	ctx.beginPath();
	ctx.moveTo(value.x, value.y + value.height);
	ctx.lineTo(value.x + value.width, value.y + value.height);
	ctx.lineTo(value.x + value.width / 2, value.y);
	ctx.fill();
}

function moveRoof(value) {
	ctx.beginPath();
	ctx.moveTo(value.x, value.y + value.height);
	ctx.lineTo(value.x + value.width, value.y + value.height);
	ctx.lineTo(value.x + value.width / 2, value.y);
	if (mouseclick && ctx.isPointInPath(ClientX, ClientY)) {
		value.x = ClientX - value.width / 2;
		value.y = ClientY - value.height / 2;
		return true;
	}
}

function initalValues(value) {
	ctx.fillStyle = value.color;
	if (value.x == null && value.y == null) {
		value.x = Math.floor(Math.random() * (canvas.width - value.width));
		value.y = Math.floor(Math.random() * (canvas.height - value.height));
	}
}